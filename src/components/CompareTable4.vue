<template>
    <div>



        <div v-if="this.data2View !== null && this.data3View !== null && this.selectedData !== null">

            <!-- {{selectedData}} <br><br>
            {{input2}}
            {{Object.keys(this.data2View[0]).length}} -->
            <!-- {{this.data2View[0]}} <br><br>
            {{this.selectedData}} <br><br>
            {{this.datas2nd}} -->
            <div class="p-grid p-jc-center p-mt-4">
                <h1>Assessment Table</h1>
                <!-- <table class="p-ml-2 p-mr-2">
                    <col style="width: 10%;" />
                    <tr>
                        <th>Variabel</th>
                        <th>{{ this.data2View[0]['var1']}}
                            <br><br>
                            <Button @click="selectAll(this.data2View[0])" label="Select All" icon="pi pi-check"
                                class="p-button-sm p-button-info p-mr-2" />
                          
                        </th>
                        <th v-for="item in this.datas2nd" :key="item">
                            {{item['var1']}} <br><br>

                            <Button @click="selectAll(item)" label="Select All" icon="pi pi-check"
                                class="p-button-sm p-button-info" />
                        </th>
                    </tr>
                </table> -->
                <div style="width:100%" class="p-ml-2 p-mr-2">
                    <Accordion :multiple="true" :activeIndex="[0]">
                        <AccordionTab header="Variabel 1 - 10">
                            <table>
                                <col style="width: 10%;" />
                                <tr>
                                    <th>Variabel</th>
                                    <th>{{ this.data2View[0]['var1']}}
                                        <br><br>
                                        <Button @click="selectAll(this.data2View[0])" label="Select All"
                                            icon="pi pi-check" class="p-button-sm p-button-info p-mr-2" />
                                        <!-- <Button @click="selectedData = []"  label="Deselect All" icon="pi pi-check"
                                class="p-button-sm p-button-danger" /> -->
                                    </th>
                                    <th v-for="item in this.datas2nd" :key="item">
                                        {{item['var1']}} <br><br>

                                        <Button @click="selectAll(item)" label="Select All" icon="pi pi-check"
                                            class="p-button-sm p-button-info" />
                                    </th>
                                </tr>

                                <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                                    <tr>
                                        <td style="max-width:100px;"> {{index}}

                                        </td>
                                        <td>
                                            <div class="p-grid  p-ai-center p-m-1">
                                                <div class="p-col-12 p-md-6 p-lg-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item+index+indexN"
                                                            @change.prevent="selectValue(item, index, indexN)"
                                                            :name="item" :value="item" v-model="selectedData[index]" />
                                                        <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                                            <!-- --- {{selectedData[index]}} -->
                                                            <!-- | index : {{index}}  | indexN: {{indexN}} -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-12 p-md-6 p-lg-2   ">
                                                    <div class="p-grid p-jc-end">
                                                        <Button :disabled="selectedData[index] != item"
                                                            @click="input[0][indexN] = true" icon="pi pi-pencil"
                                                            class="p-button-sm p-mr-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div v-if="input[0][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[0][indexN] = false" icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[0][indexN] = false; this.data2View[0][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>


                                            <!-- <div class="p-grid">
                                    
                                </div> -->


                                        </td>
                                        <td v-for="(item2, index2) in this.datas2nd" :key="item2">
                                            <div class="p-grid p-ai-center">
                                                <div class="p-col-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item2+index2+indexN" :name="item2"
                                                            :value="item2[index]"
                                                            @change.prevent="selectValue(item2[index2], index2, indexN)"
                                                            v-model="selectedData[index]" />
                                                        <label :for="item2+index2+indexN"
                                                            class="p-ml-2">{{item2[index]}}
                                                            <!-- | item2 : {{item2}}  -->
                                                            <!-- | index2 : {{index2}} | indexN: {{indexN}} | index3: {{index3}}  -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-2  ">
                                                    <Button :disabled="selectedData[index] != item2[index]"
                                                        @click="input[index2+1][indexN] = true" icon="pi pi-pencil"
                                                        class="p-button-sm" />
                                                </div>
                                                <br>

                                            </div>
                                            <div v-if="input[index2+1][indexN]"
                                                class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[index2+1][indexN] = false"
                                                                icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[index2+1][indexN] = false; this.datas2nd[index2][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                </template>
                            </table>
                        </AccordionTab>
                        <AccordionTab header="Variabel 11 -20">
                            <table>
                                <col style="width: 10%;" />
                                <tr>
                                    <th>Variabel</th>
                                    <th>{{ this.data2View[0]['var1']}}
                                        <br><br>
                                        <Button @click="selectAll(this.data2View[0])" label="Select All"
                                            icon="pi pi-check" class="p-button-sm p-button-info p-mr-2" />
                                        <!-- <Button @click="selectedData = []"  label="Deselect All" icon="pi pi-check"
                                class="p-button-sm p-button-danger" /> -->
                                    </th>
                                    <th v-for="item in this.datas2nd" :key="item">
                                        {{item['var1']}} <br><br>

                                        <Button @click="selectAll(item)" label="Select All" icon="pi pi-check"
                                            class="p-button-sm p-button-info" />
                                    </th>
                                </tr>

                                <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                                    <tr>
                                        <td style="max-width:100px;"> {{index}}

                                        </td>
                                        <td>
                                            <div class="p-grid  p-ai-center p-m-1">
                                                <div class="p-col-12 p-md-6 p-lg-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item+index+indexN"
                                                            @change.prevent="selectValue(item, index, indexN)"
                                                            :name="item" :value="item" v-model="selectedData[index]" />
                                                        <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                                            <!-- --- {{selectedData[index]}} -->
                                                            <!-- | index : {{index}}  | indexN: {{indexN}} -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-12 p-md-6 p-lg-2   ">
                                                    <div class="p-grid p-jc-end">
                                                        <Button :disabled="selectedData[index] != item"
                                                            @click="input[0][indexN] = true" icon="pi pi-pencil"
                                                            class="p-button-sm p-mr-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div v-if="input[0][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[0][indexN] = false" icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[0][indexN] = false; this.data2View[0][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>


                                            <!-- <div class="p-grid">
                                    
                                </div> -->


                                        </td>
                                        <td v-for="(item2, index2) in this.datas2nd" :key="item2">
                                            <div class="p-grid p-ai-center">
                                                <div class="p-col-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item2+index2+indexN" :name="item2"
                                                            :value="item2[index]"
                                                            @change.prevent="selectValue(item2[index2], index2, indexN)"
                                                            v-model="selectedData[index]" />
                                                        <label :for="item2+index2+indexN"
                                                            class="p-ml-2">{{item2[index]}}
                                                            <!-- | item2 : {{item2}}  -->
                                                            <!-- | index2 : {{index2}} | indexN: {{indexN}} | index3: {{index3}}  -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-2  ">
                                                    <Button :disabled="selectedData[index] != item2[index]"
                                                        @click="input[index2+1][indexN] = true" icon="pi pi-pencil"
                                                        class="p-button-sm" />
                                                </div>
                                                <br>

                                            </div>
                                            <div v-if="input[index2+1][indexN]"
                                                class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[index2+1][indexN] = false"
                                                                icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[index2+1][indexN] = false; this.datas2nd[index2][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                </template>
                            </table>
                        </AccordionTab>
                        <AccordionTab header="Variabel 21 -30">
                            <table>
                                <col style="width: 10%;" />
                                <tr>
                                    <th>Variabel</th>
                                    <th>{{ this.data2View[0]['var1']}}
                                        <br><br>
                                        <Button @click="selectAll(this.data2View[0])" label="Select All"
                                            icon="pi pi-check" class="p-button-sm p-button-info p-mr-2" />
                                        <!-- <Button @click="selectedData = []"  label="Deselect All" icon="pi pi-check"
                                class="p-button-sm p-button-danger" /> -->
                                    </th>
                                    <th v-for="item in this.datas2nd" :key="item">
                                        {{item['var1']}} <br><br>

                                        <Button @click="selectAll(item)" label="Select All" icon="pi pi-check"
                                            class="p-button-sm p-button-info" />
                                    </th>
                                </tr>

                                <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                                    <tr>
                                        <td style="max-width:100px;"> {{index}}

                                        </td>
                                        <td>
                                            <div class="p-grid  p-ai-center p-m-1">
                                                <div class="p-col-12 p-md-6 p-lg-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item+index+indexN"
                                                            @change.prevent="selectValue(item, index, indexN)"
                                                            :name="item" :value="item" v-model="selectedData[index]" />
                                                        <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                                            <!-- --- {{selectedData[index]}} -->
                                                            <!-- | index : {{index}}  | indexN: {{indexN}} -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-12 p-md-6 p-lg-2   ">
                                                    <div class="p-grid p-jc-end">
                                                        <Button :disabled="selectedData[index] != item"
                                                            @click="input[0][indexN] = true" icon="pi pi-pencil"
                                                            class="p-button-sm p-mr-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div v-if="input[0][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[0][indexN] = false" icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[0][indexN] = false; this.data2View[0][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>


                                            <!-- <div class="p-grid">
                                    
                                </div> -->


                                        </td>
                                        <td v-for="(item2, index2) in this.datas2nd" :key="item2">
                                            <div class="p-grid p-ai-center">
                                                <div class="p-col-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item2+index2+indexN" :name="item2"
                                                            :value="item2[index]"
                                                            @change.prevent="selectValue(item2[index2], index2, indexN)"
                                                            v-model="selectedData[index]" />
                                                        <label :for="item2+index2+indexN"
                                                            class="p-ml-2">{{item2[index]}}
                                                            <!-- | item2 : {{item2}}  -->
                                                            <!-- | index2 : {{index2}} | indexN: {{indexN}} | index3: {{index3}}  -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-2  ">
                                                    <Button :disabled="selectedData[index] != item2[index]"
                                                        @click="input[index2+1][indexN] = true" icon="pi pi-pencil"
                                                        class="p-button-sm" />
                                                </div>
                                                <br>

                                            </div>
                                            <div v-if="input[index2+1][indexN]"
                                                class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[index2+1][indexN] = false"
                                                                icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[index2+1][indexN] = false; this.datas2nd[index2][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                </template>
                            </table>
                        </AccordionTab>

                        <AccordionTab header="Variabel 31 -40">
                            <table>
                                <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                                    <tr>
                                        <td style="max-width:100px;"> {{index}}

                                        </td>
                                        <td>
                                            <div class="p-grid  p-ai-center p-m-1">
                                                <div class="p-col-12 p-md-6 p-lg-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item+index+indexN"
                                                            @change.prevent="selectValue(item, index, indexN)"
                                                            :name="item" :value="item" v-model="selectedData[index]" />
                                                        <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                                            <!-- --- {{selectedData[index]}} -->
                                                            <!-- | index : {{index}}  | indexN: {{indexN}} -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-12 p-md-6 p-lg-2   ">
                                                    <div class="p-grid p-jc-end">
                                                        <Button :disabled="selectedData[index] != item"
                                                            @click="input[0][indexN] = true" icon="pi pi-pencil"
                                                            class="p-button-sm p-mr-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div v-if="input[0][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[0][indexN] = false" icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[0][indexN] = false; this.data2View[0][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>


                                            <!-- <div class="p-grid">
                                    
                                </div> -->


                                        </td>
                                        <td v-for="(item2, index2) in this.datas2nd" :key="item2">
                                            <div class="p-grid p-ai-center">
                                                <div class="p-col-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item2+index2+indexN" :name="item2"
                                                            :value="item2[index]"
                                                            @change.prevent="selectValue(item2[index2], index2, indexN)"
                                                            v-model="selectedData[index]" />
                                                        <label :for="item2+index2+indexN"
                                                            class="p-ml-2">{{item2[index]}}
                                                            <!-- | item2 : {{item2}}  -->
                                                            <!-- | index2 : {{index2}} | indexN: {{indexN}} | index3: {{index3}}  -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-2  ">
                                                    <Button :disabled="selectedData[index] != item2[index]"
                                                        @click="input[index2+1][indexN] = true" icon="pi pi-pencil"
                                                        class="p-button-sm" />
                                                </div>
                                                <br>

                                            </div>
                                            <div v-if="input[index2+1][indexN]"
                                                class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[index2+1][indexN] = false"
                                                                icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[index2+1][indexN] = false; this.datas2nd[index2][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                </template>
                            </table>
                        </AccordionTab>
                        <AccordionTab header="Variabel 41 -50">
                            <table>
                                <col style="width: 10%;" />
                                <tr>
                                    <th>Variabel</th>
                                    <th>{{ this.data2View[0]['var1']}}
                                        <br><br>
                                        <Button @click="selectAll(this.data2View[0])" label="Select All"
                                            icon="pi pi-check" class="p-button-sm p-button-info p-mr-2" />
                                        <!-- <Button @click="selectedData = []"  label="Deselect All" icon="pi pi-check"
                                class="p-button-sm p-button-danger" /> -->
                                    </th>
                                    <th v-for="item in this.datas2nd" :key="item">
                                        {{item['var1']}} <br><br>

                                        <Button @click="selectAll(item)" label="Select All" icon="pi pi-check"
                                            class="p-button-sm p-button-info" />
                                    </th>
                                </tr>

                                <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                                    <tr>
                                        <td style="max-width:100px;"> {{index}}

                                        </td>
                                        <td>
                                            <div class="p-grid  p-ai-center p-m-1">
                                                <div class="p-col-12 p-md-6 p-lg-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item+index+indexN"
                                                            @change.prevent="selectValue(item, index, indexN)"
                                                            :name="item" :value="item" v-model="selectedData[index]" />
                                                        <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                                            <!-- --- {{selectedData[index]}} -->
                                                            <!-- | index : {{index}}  | indexN: {{indexN}} -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-12 p-md-6 p-lg-2   ">
                                                    <div class="p-grid p-jc-end">
                                                        <Button :disabled="selectedData[index] != item"
                                                            @click="input[0][indexN] = true" icon="pi pi-pencil"
                                                            class="p-button-sm p-mr-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div v-if="input[0][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[0][indexN] = false" icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[0][indexN] = false; this.data2View[0][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>


                                            <!-- <div class="p-grid">
                                    
                                </div> -->


                                        </td>
                                        <td v-for="(item2, index2) in this.datas2nd" :key="item2">
                                            <div class="p-grid p-ai-center">
                                                <div class="p-col-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item2+index2+indexN" :name="item2"
                                                            :value="item2[index]"
                                                            @change.prevent="selectValue(item2[index2], index2, indexN)"
                                                            v-model="selectedData[index]" />
                                                        <label :for="item2+index2+indexN"
                                                            class="p-ml-2">{{item2[index]}}
                                                            <!-- | item2 : {{item2}}  -->
                                                            <!-- | index2 : {{index2}} | indexN: {{indexN}} | index3: {{index3}}  -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-2  ">
                                                    <Button :disabled="selectedData[index] != item2[index]"
                                                        @click="input[index2+1][indexN] = true" icon="pi pi-pencil"
                                                        class="p-button-sm" />
                                                </div>
                                                <br>

                                            </div>
                                            <div v-if="input[index2+1][indexN]"
                                                class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[index2+1][indexN] = false"
                                                                icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[index2+1][indexN] = false; this.datas2nd[index2][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                </template>
                            </table>
                        </AccordionTab>
                        <AccordionTab header="Variabel 51 -60">
                            <table>
                                <col style="width: 10%;" />
                                <tr>
                                    <th>Variabel</th>
                                    <th>{{ this.data2View[0]['var1']}}
                                        <br><br>
                                        <Button @click="selectAll(this.data2View[0])" label="Select All"
                                            icon="pi pi-check" class="p-button-sm p-button-info p-mr-2" />
                                        <!-- <Button @click="selectedData = []"  label="Deselect All" icon="pi pi-check"
                                class="p-button-sm p-button-danger" /> -->
                                    </th>
                                    <th v-for="item in this.datas2nd" :key="item">
                                        {{item['var1']}} <br><br>

                                        <Button @click="selectAll(item)" label="Select All" icon="pi pi-check"
                                            class="p-button-sm p-button-info" />
                                    </th>
                                </tr>

                                <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                                    <tr>
                                        <td style="max-width:100px;"> {{index}}

                                        </td>
                                        <td>
                                            <div class="p-grid  p-ai-center p-m-1">
                                                <div class="p-col-12 p-md-6 p-lg-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item+index+indexN"
                                                            @change.prevent="selectValue(item, index, indexN)"
                                                            :name="item" :value="item" v-model="selectedData[index]" />
                                                        <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                                            <!-- --- {{selectedData[index]}} -->
                                                            <!-- | index : {{index}}  | indexN: {{indexN}} -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-12 p-md-6 p-lg-2   ">
                                                    <div class="p-grid p-jc-end">
                                                        <Button :disabled="selectedData[index] != item"
                                                            @click="input[0][indexN] = true" icon="pi pi-pencil"
                                                            class="p-button-sm p-mr-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div v-if="input[0][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[0][indexN] = false" icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[0][indexN] = false; this.data2View[0][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>


                                            <!-- <div class="p-grid">
                                    
                                </div> -->


                                        </td>
                                        <td v-for="(item2, index2) in this.datas2nd" :key="item2">
                                            <div class="p-grid p-ai-center">
                                                <div class="p-col-10">
                                                    <div class=" p-jc-start">
                                                        <RadioButton :id="item2+index2+indexN" :name="item2"
                                                            :value="item2[index]"
                                                            @change.prevent="selectValue(item2[index2], index2, indexN)"
                                                            v-model="selectedData[index]" />
                                                        <label :for="item2+index2+indexN"
                                                            class="p-ml-2">{{item2[index]}}
                                                            <!-- | item2 : {{item2}}  -->
                                                            <!-- | index2 : {{index2}} | indexN: {{indexN}} | index3: {{index3}}  -->
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="p-col-2  ">
                                                    <Button :disabled="selectedData[index] != item2[index]"
                                                        @click="input[index2+1][indexN] = true" icon="pi pi-pencil"
                                                        class="p-button-sm" />
                                                </div>
                                                <br>

                                            </div>
                                            <div v-if="input[index2+1][indexN]"
                                                class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                                <div class="p-col-12 p-md-6 p-lg-12">
                                                    <div class=" p-jc-end">

                                                        <InputText style="width:100%;" v-model="selectedData[index]" />
                                                        <div class="p-grid p-jc-end p-mt-1">
                                                            <Button @click="input[index2+1][indexN] = false"
                                                                icon="pi pi-times"
                                                                class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                            <Button
                                                                @click="input[index2+1][indexN] = false; this.datas2nd[index2][index] = this.selectedData[index]"
                                                                icon="pi pi-check"
                                                                class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                </template>
                            </table>
                        </AccordionTab>

                    </Accordion>
                </div>
                <!-- <table>
                    <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                        <tr>
                            <td style="max-width:100px;"> {{index}}

                            </td>
                            <td>
                                <div class="p-grid  p-ai-center p-m-1">
                                    <div class="p-col-12 p-md-6 p-lg-10">
                                        <div class=" p-jc-start">
                                            <RadioButton :id="item+index+indexN"
                                                @change.prevent="selectValue(item, index, indexN)" :name="item"
                                                :value="item" v-model="selectedData[index]" />
                                            <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                               
                                            </label>
                                        </div>
                                    </div>
                                    <div class="p-col-12 p-md-6 p-lg-2   ">
                                        <div class="p-grid p-jc-end">
                                            <Button :disabled="selectedData[index] != item"
                                                @click="input[0][indexN] = true" icon="pi pi-pencil"
                                                class="p-button-sm p-mr-2" />
                                        </div>
                                    </div>
                                </div>

                                <div v-if="input[0][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                    <div class="p-col-12 p-md-6 p-lg-12">
                                        <div class=" p-jc-end">

                                            <InputText style="width:100%;" v-model="selectedData[index]" />
                                            <div class="p-grid p-jc-end p-mt-1">
                                                <Button @click="input[0][indexN] = false" icon="pi pi-times"
                                                    class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                <Button
                                                    @click="input[0][indexN] = false; this.data2View[0][index] = this.selectedData[index]"
                                                    icon="pi pi-check"
                                                    class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                            </div>

                                        </div>
                                    </div>

                                </div>





                            </td>
                            <td v-for="(item2, index2) in this.datas2nd" :key="item2">
                                <div class="p-grid p-ai-center">
                                    <div class="p-col-10">
                                        <div class=" p-jc-start">
                                            <RadioButton :id="item2+index2+indexN" :name="item2" :value="item2[index]"
                                                @change.prevent="selectValue(item2[index2], index2, indexN)"
                                                v-model="selectedData[index]" />
                                            <label :for="item2+index2+indexN" class="p-ml-2">{{item2[index]}}
                                               
                                            </label>
                                        </div>
                                    </div>
                                    <div class="p-col-2  ">
                                        <Button :disabled="selectedData[index] != item2[index]"
                                            @click="input[index2+1][indexN] = true" icon="pi pi-pencil"
                                            class="p-button-sm" />
                                    </div>
                                    <br>

                                </div>
                                <div v-if="input[index2+1][indexN]" class="p-grid p-mr-1 p-ml-1 p-ai-center">
                                    <div class="p-col-12 p-md-6 p-lg-12">
                                        <div class=" p-jc-end">

                                            <InputText style="width:100%;" v-model="selectedData[index]" />
                                            <div class="p-grid p-jc-end p-mt-1">
                                                <Button @click="input[index2+1][indexN] = false" icon="pi pi-times"
                                                    class="p-button-sm p-button-danger p-mt-1 p-mr-2 " />
                                                <Button
                                                    @click="input[index2+1][indexN] = false; this.datas2nd[index2][index] = this.selectedData[index]"
                                                    icon="pi pi-check"
                                                    class="p-button-sm p-button-success p-mt-1 p-mr-2" />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </td>
                        </tr>

                    </template>
                </table> -->
            </div>
            <br><br>

            <!-- Selected Valiue Table -->
            <h1>Selected Value</h1>
            <Accordion :multiple="true" :activeIndex="[0]">
                <AccordionTab header="Variabel 1 - 10">
                    <table>
                        <tr>
                            <th>
                                Variabel
                            </th>
                            <th>
                                Selected Value
                            </th>
                        </tr>
                        <tr v-for="(item, index) in this.selectedData" :key="item">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </table>
                </AccordionTab>
                <AccordionTab header="Variabel 11 -20">
                    <table>
                        <tr>
                            <th>
                                Variabel
                            </th>
                            <th>
                                Selected Value
                            </th>
                        </tr>
                        <tr v-for="(item, index) in this.selectedData" :key="item">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </table>
                </AccordionTab>
                <AccordionTab header="Variabel 21 -30">
                    <table>
                        <tr>
                            <th>
                                Variabel
                            </th>
                            <th>
                                Selected Value
                            </th>
                        </tr>
                        <tr v-for="(item, index) in this.selectedData" :key="item">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </table>
                </AccordionTab>

                <AccordionTab header="Variabel 31 -40">
                    <table>
                        <tr>
                            <th>
                                Variabel
                            </th>
                            <th>
                                Selected Value
                            </th>
                        </tr>
                        <tr v-for="(item, index) in this.selectedData" :key="item">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </table>
                </AccordionTab>
                <AccordionTab header="Variabel 41 -50">
                    <table>
                        <tr>
                            <th>
                                Variabel
                            </th>
                            <th>
                                Selected Value
                            </th>
                        </tr>
                        <tr v-for="(item, index) in this.selectedData" :key="item">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </table>
                </AccordionTab>
                <AccordionTab header="Variabel 51 -60">
                    <table>
                        <tr>
                            <th>
                                Variabel
                            </th>
                            <th>
                                Selected Value
                            </th>
                        </tr>
                        <tr v-for="(item, index) in this.selectedData" :key="item">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </table>
                </AccordionTab>

            </Accordion>


            <br><br>
            <Button label="Submit" icon="" class="p-mb-2 p-ripple" @click="preview()" /> <br>
            <Toast />
        </div>



    </div>
</template>
<script>
    import DataService from '../services/DataService'
    import RadioButton from 'primevue/radiobutton'
    import InputText from 'primevue/inputtext'
    import Toast from 'primevue/toast';


    // import Divider from 'primevue/divider'
    // kalau dia 63 variabel

    import Accordion from 'primevue/accordion';
    import AccordionTab from 'primevue/accordiontab';
    export default {
        components: {
            // CompareTable: () => import('../components/CompareTable.vue')

            // Paginator,
            InputText,
            // Divider,
            RadioButton,
            Toast,

            Accordion,
            AccordionTab


        },
        data() {
            return {
                data2View: null,
                data3View: null,
                selectedData: null,
                input: null,
                datas2nd: null,
                input2: null,
            }
        },
        async created() {
            await DataService.getData2()
                .then(response => {
                    this.data2View = response.data
                    // this.$store.dispatch('compareTable/setData', response.data, {
                    //     root: true
                    // })
                    // this.selectedData = new Array(this.data2View[0].length).map(() => new Array(Object.keys(this.data2View[0]).length))
                    this.input = new Array(this.data2View[0].length).fill(false).map(() => new Array(Object
                        .keys(this
                            .data2View[0]).length).fill(false))

                    this.input = new Array(11).fill(false).map(() => new Array(3).fill(false));
                    //  this.input2 = new Array(11).fill(false).map(() => new Array(3).fill(false));
                })
                .catch(error => {
                    console.log(error)
                })

            await DataService.getData3()
                .then(response => {
                    this.data3View = response.data
                    // this.$store.dispatch('compareTable/setData', response.data, {
                    //     root: true
                    // })
                    this.datas2nd = this.data3View.filter(({
                        var2
                    }) => var2 === '1x')
                })
                .catch(error => {
                    console.log(error)
                })
            var thekeys = Object.keys(this.data2View[0])
            var myObj = {}
            thekeys.forEach(element => {
                myObj[element] = null
            });

            this.selectedData = myObj
            console.log('created selectedData', this.selectedData)


            //  this.$store.dispatch('compareTable/setSelectedData', Object.assign(this.selectedData), {
            //         root: true
            //     })




        },
        computed: {
            myCardBgColorData() {
                return this.$store.state.mainstyle.myCardBgColorData
            },
            myTextColorData() {
                return this.$store.state.mainstyle.myTextColorData
            },
            mySelectedData() {
                return this.$store.state.compareTable.mySelectedData
            }
        },
        methods: {
            preview() {
                console.log(typeof this.selectedData)
                console.log('selectedData : ', Object.assign(this.selectedData))

                // this.$store.dispatch('compareTable/setSelectedData', Object.assign(this.selectedData), {
                //     root: true
                // })
                this.$toast.add({
                    severity: 'success',
                    summary: 'Yeay!',
                    detail: 'Data berhasil disubmit :)',
                    life: 3000
                });
                var thekeys = Object.keys(this.data2View[0])
                var myObj = {}
                thekeys.forEach(element => {
                    myObj[element] = null
                });

                this.selectedData = myObj

            },
            selectAll(data) {
                // var obj = data
                // this.selectedData = obj


                Object.entries(data).forEach(element => {
                    this.selectedData[element[0]] = element[1]
                    console.log(element)
                });

                //  this.$store.dispatch('compareTable/setSelectedData', data, {
                //     root: true
                // })
            },
            // selectValue(varIndex, value){
            //     console.log('var : ', varIndex, 'value : ', value)
            //     this.selectedData[varIndex] = []
            //     this.selectedData[varIndex] = value

            // },
            selectValue(item, index, indexN) {
                // const temp = this.selectedData[index]
                // console.log('temp ', temp)
                // console.log(`selectedData[index] ${this.selectedData[index]}`)
                console.log(`item ${item}`)
                console.log(`index ${index}`)
                console.log(`indexN ${indexN}`)


            }
        }
    }
</script>

<style scoped>
    .cardBg {
        background-color: #9155fd;
        color: white;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        /* background-color: #dddddd; */
    }
</style>