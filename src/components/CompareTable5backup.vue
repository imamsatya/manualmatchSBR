<template>
    <div>

        <div class="p-col-12 p-lg-12">
            <!-- <div v-if="selectedPetugas !== null">

                 {{selectedPetugas['id']}}
             </div> -->

            <Dropdown v-if="petugasOptions !== null"
                :class="'p-col-12 p-lg-12 '+myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-2 animate__animated animate__fadeIn '"
                v-model="selectedPetugas" :options="petugasOptions.data" optionLabel="nama" :filter="true"
                placeholder="Pilih Petugas" :showClear="true" @change="getUserData(selectedPetugas['id'])">
                <template #value="slotProps">
                    <div class="country-item country-item-value" v-if="slotProps.value">

                        <div>{{slotProps.value.nama}}</div>
                    </div>
                    <span v-else>
                        {{slotProps.placeholder}}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="country-item">

                        <div>{{slotProps.option.nama}}</div>
                    </div>
                </template>
            </Dropdown>
        </div>

        <div v-if="this.data2View !== null && this.data3View !== null && this.selectedData !== null">

            <!-- {{selectedData}} <br><br>
            {{input2}}
            {{Object.keys(this.data2View[0]).length}} -->
            <!-- {{this.data2View[0]}} <br><br>
            {{this.selectedData}} <br><br>
            {{this.datas2nd}} -->

            <!-- {{datas2nd}} <br><br>
            {{data2View[0]}} <br><br> -->
            <!-- {{transposedData}} -->

            <!-- {{this.datas2nd.length}} -->
            <!-- {{selectedData}} -->

            <div class="  p-mt-4">
                <!-- <h1>Assessment Table</h1> -->
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
                <!-- <div style="width:100%" class="p-ml-2 p-mr-2">
                    <table>
                        <col style="width: 10%;" />
                        <tr>
                            <th>Variabel</th>
                            <th>{{ this.data2View[0]['var1']}}

                            </th>
                            <th>Selected Value

                            </th>
                            <th>Action </th>

                        </tr>

                        <template v-for="(item,index, indexN) in this.data2View[0]" :key="item">


                            <tr>
                                <td style="max-width:100px;"> {{index}}

                                </td>
                                <td>

                                    <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                       
                                    </label>
                                </td>
                                <td>

                                    <label :for="item+index+indexN" class="p-ml-2">{{item}}
                                        
                                    </label>
                                </td>
                                <td>

                                    <label :for="item+index+indexN" class="p-ml-2">
                                        <Button label="View" icon="pi pi-external-link" @click="displayBasic2=true" />

                                       
                                    </label>
                                </td>


                            </tr>

                        </template>
                        <Dialog header="Header" v-model:visible="displayBasic2" :style="{width: '50vw'}">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                                qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                molestias excepturi sint occaecati cupiditate non provident,
                                similique sunt in culpa qui officia deserunt mollitia animi, id est
                                laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                                omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                voluptatibus maiores alias consequatur aut perferendis doloribus
                                asperiores repellat.</p>
                            <template #footer>
                                <Button label="No" icon="pi pi-times" @click="displayBasic2=false"
                                    class="p-button-text" />
                                <Button label="Yes" icon="pi pi-check" @click="displayBasic2=false" autofocus />
                            </template>
                        </Dialog>
                    </table>
                </div> -->

                <!-- <DataTable :value="transposedData" :class="myCardBgColorData+' '+myTextColorData"
                    responsiveLayout="scroll">
                    <Column field="variabel" :class="myCardBgColorData+' '+myTextColorData" header="Variabel"
                        headerStyle="width:3em;">
                        <template #body="slotProps">
                            {{slotProps.data.variabel}}
                        </template>
                    </Column>

                    <Column field="value" :class="myCardBgColorData+' '+myTextColorData" header="Sumber SBR"
                        headerStyle="width:3em;">
                        <template #body="slotProps">
                            {{slotProps.data.value}}

                        </template>
                    </Column>

                    <Column field="Sumber1" :class="myCardBgColorData+' '+myTextColorData" header="Selected Value"
                        headerStyle="width:3em;">

                    </Column>

                    <Column :class="myCardBgColorData+' '+myTextColorData" header="Action" headerStyle="width:3em;">
                        <template #body="slotProps">
                            <Button :disabled="selectedData[index] != item" @click="console.log(slotProps)"
                                icon="pi pi-eye" class="p-button-sm p-mr-2" />
                        </template>
                    </Column>







                </DataTable> -->


            </div>
            <!-- <br><br> -->

            <!-- Selected Valiue Table -->


            <!-- <br><br> -->

            <Toast />
        </div>


        <div v-if="transposedData !== null">
            <!-- {{ transposedData[19]['sumber1']}} -->
            <!-- {{transposedData[19]}} -->

            <!-- {{selectedData}} -->
            <div class="p-col-12 p-lg-12">
                <Card @mouseover="myShadow = ''" @mouseleave="myShadow = ''"
                    :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-2 animate__animated animate__fadeIn '"
                    style="border-radius: 18px;">
                    <template #title>
                        Progress
                    </template>
                    <template #content>
                        <div class="p-grid p-jc-center " style=" border-left-color: red; ">
                            <div class="p-col-3 p-lg-3 p-md-12 p-sm-12">
                                <div>
                                    <span style="font-size: 40px;"> {{userSummary['belum_assessment']}} </span> <br>
                                    Belum Assessment
                                </div>
                            </div>
                            <div class="p-col-1">
                                <Divider layout="vertical" />
                            </div>
                            <div class="p-col-3 p-lg-3 p-md-12 p-sm-12">
                                <div>
                                    <span style="font-size: 40px;"> {{userSummary['sudah_assessment']}} </span> <br>
                                    Sudah Assessment
                                </div>
                            </div>
                            <div class="p-col-1">
                                <Divider layout="vertical" />
                            </div>
                            <div class="p-col-3 p-lg-3 p-md-12 p-sm-12">
                                <div>
                                    <span style="font-size: 40px;"> {{userSummary['total_data_assessment']}} </span>
                                    <br>
                                    Total
                                </div>
                            </div>
                            <div class="p-col-12 p-mt-4">
                                <ProgressBar style="color:white;"
                                    :value="((userSummary['sudah_assessment']/userSummary['total_data_assessment'])*100).toFixed(2)" />
                                <!-- <ProgressBar style="color:white;" :value="(2/3*100).toFixed(2)" /> -->
                            </div>
                        </div>
                    </template>
                </Card>


            </div>
        </div>
        <!-- {{selectedData}} <br> -->
        <br>

        <DataTable v-if="datas2nd !== null" :value="transposedData" :class="myCardBgColorData+' '+myTextColorData"
            responsiveLayout="scroll" stripedRows>
            <Column field="variabel" :class="myCardBgColorData+' '+myTextColorData" header="Variabel"
                headerStyle="width:3em;">
                <template #body="slotProps">
                    {{slotProps.data.variabel}}
                </template>
            </Column>

            <Column field="value" :class="myCardBgColorData+' '+myTextColorData" header="Sumber SBR"
                headerStyle="width:3em;">
                <template #body="slotProps">

                    <div v-if="slotProps.data.variabel != 'telepon' &&
                    slotProps.data.variabel != 'email' &&
                    slotProps.data.variabel != 'fax' &&
                    slotProps.data.variabel != 'website'">
                        <RadioButton :id="slotProps.variabel" name="item2" :value="slotProps.data.value"
                            v-model="selectedData[Object.keys(this.data2View[0])[slotProps.index]]" />
                        <label
                            @click="selectedData[Object.keys(this.data2View[0])[slotProps.index]] = slotProps.data.value"
                            :ref="slotProps.index" for="slotProps.variabel"
                            
                            class="p-ml-2">
                             <!-- @dblclick="editValue2(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps, 'sumber'+(index2))" -->
                            {{slotProps.data.value}}
                        </label>
                    </div>

                    <div v-if="slotProps.data.variabel == 'telepon' ||
                    slotProps.data.variabel == 'email' ||
                    slotProps.data.variabel == 'fax' ||
                    slotProps.data.variabel == 'website'">

                        <RadioButton :id="slotProps.index" name="item2" :value="slotProps.data.value"
                            v-model="selectedData[Object.keys(this.data2View[0])[slotProps.index]]" />
                        <label
                            @click="selectedData[Object.keys(this.data2View[0])[slotProps.index]] = slotProps.data.value"
                            for="slotProps.index"
                            
                            class="p-ml-2">
                            <div v-for="(todo) in slotProps.data.value" v-bind:key="todo">
                                <!-- @dblclick="editValue(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps, 'value')" -->
                                <!-- | {{todo['ekstensi']}} | {{todo['no_telepon']}} -->
                                <div v-for="(mykey, indexKey) in Object.keys(todo)" v-bind:key="indexKey">
                                    {{mykey}} : {{todo[mykey]}}

                                </div>
                                <br>

                            </div>

                        </label>
                    </div>


                </template>
            </Column>

            <template v-for="index2 in this.datas2nd.length" :key="index2">
                <Column :field="'sumber'+(index2)" :class="myCardBgColorData+' '+myTextColorData"
                    :header="'sumber '+(index2) " headerStyle="width:3em;">
                    <template #body="slotProps">
                        <!-- {{slotProps.data}} -->
                        <div v-if="slotProps.data.variabel !== 'telepon' &&
                    slotProps.data.variabel != 'email' &&
                    slotProps.data.variabel != 'fax' &&
                    slotProps.data.variabel != 'website'">
                            <RadioButton :id="slotProps.index" name="item2" :value="slotProps.data['sumber'+index2]"
                                v-model="selectedData[Object.keys(this.data2View[0])[slotProps.index]]" />
                            <label
                                @click="selectedData[Object.keys(this.data2View[0])[slotProps.index]] = slotProps.data['sumber'+index2] "
                                for="slotProps.index"
                                
                                class="p-ml-2">{{slotProps.data['sumber'+index2]}}
                                <!-- @dblclick="editValue2(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps, 'sumber'+(index2))" -->

                            </label>
                        </div>
                        <div v-if="slotProps.data.variabel == 'telepon' ||
                    slotProps.data.variabel == 'email' ||
                    slotProps.data.variabel == 'fax' ||
                    slotProps.data.variabel == 'website'">

                            <RadioButton :id="slotProps.index" name="item2" :value="slotProps.data['sumber'+index2]"
                                v-model="selectedData[Object.keys(this.data2View[0])[slotProps.index]]" />
                            <label
                                @click="selectedData[Object.keys(this.data2View[0])[slotProps.index]] = slotProps.data['sumber'+index2] "
                                for="slotProps.index"
                                
                                class="p-ml-2">
                                <!-- @dblclick="editValue2(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps, 'sumber'+(index2))" -->
                                <div v-for="(item,index) in slotProps.data['sumber'+index2]" :key="item">
                                    {{index}} : {{item}} <br>
                                </div>

                            </label>
                        </div>


                    </template>
                </Column>
            </template>

            <Column :class="myCardBgColorData+' '+myTextColorData" header="Selected Value" headerStyle="width:3em;">
                <template #body="slotProps">
                    <div v-if="slotProps.data.variabel !== 'telepon' &&
                    slotProps.data.variabel != 'email' &&
                    slotProps.data.variabel != 'fax' &&
                    slotProps.data.variabel != 'website'"
                     @dblclick="editValueSelected(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps, 'sumber'+(index2))"
                    >
                        {{selectedData[Object.keys(this.data2View[0])[slotProps.index]]}}
                    </div>
                    <div v-if="slotProps.data.variabel == 'telepon' ||
                    slotProps.data.variabel == 'email' ||
                    slotProps.data.variabel == 'fax' ||
                    slotProps.data.variabel == 'website'">
                        <div v-if="selectedData[Object.keys(this.data2View[0])[slotProps.index]]  !== null">


                            <div v-if="selectedData[Object.keys(this.data2View[0])[slotProps.index]].length > 1">
                                <div v-for="(item,index) in selectedData[Object.keys(this.data2View[0])[slotProps.index]]"
                                    :key="item">
                                    <!-- {{index}} : {{item}} <br> -->
                                    <div v-for="(item2, index2) in selectedData[Object.keys(this.data2View[0])[slotProps.index]][index]"
                                        :key="item2">
                                        {{index2}} : {{item2}} <br>
                                    </div>
                                    <br>

                                </div>
                            </div>
                            <div v-else>
                                <div v-for="(item,index) in selectedData[Object.keys(this.data2View[0])[slotProps.index]]"
                                    :key="item">
                                    {{index}} : {{item}} <br>
                                </div>
                            </div>

                        </div>

                    </div>
                </template>
            </Column>

        </DataTable>

        <Dialog header="Edit Value" v-model:visible="displayBasic2" :style="{width: '50vw'}">
            <p>{{editedValue}}</p>

            <InputText style="width:100%;" v-model="editedValue" />


            <template #footer>
                <Button label="No" icon="pi pi-times" @click="displayBasic2=false" class="p-button-text" />
                <!-- <Button label="Yes" icon="pi pi-check" @click="
                                displayBasic2=false;
                                this.transposedData[selectedIndex][selectedKey] = editedValue;
                                this.selectedData[this.transposedData[selectedIndex]['variabel']] = editedValue
                                " autofocus /> -->
                                 <Button label="Yes" icon="pi pi-check" @click="
                                displayBasic2=false;
                                
                                this.selectedData[this.selectedKey] = editedValue
                                " autofocus />
            </template>
        </Dialog>
        <br><br>

        <Button label="Submit" icon="" class="p-mb-2 p-ripple" @click="submit()" /> <br>



    </div>
</template>
<script>
    import DataService from '../services/DataService'
    import RadioButton from 'primevue/radiobutton'
    import InputText from 'primevue/inputtext'
    import Toast from 'primevue/toast';
    import Dialog from 'primevue/dialog';
    import ProgressBar from 'primevue/progressbar';

    // import Divider from 'primevue/divider'
    // kalau dia 63 variabel

    // import Accordion from 'primevue/accordion';
    // import AccordionTab from 'primevue/accordiontab';
    export default {
        components: {
            // CompareTable: () => import('../components/CompareTable.vue')

            // Paginator,
            InputText,
            ProgressBar,
            // Divider,
            RadioButton,
            Dialog,
            Toast,

            // Accordion,
            // AccordionTab


        },
        data() {
            return {
                userSummary: null,
                selectedPetugas: null,
                petugasOptions: null,
                selectedKey: null,
                selectedIndex: null,
                editedValue: null,
                displayBasic2: false,
                data2View: null,
                data3View: null,
                selectedData: null,
                input: null,
                datas2nd: null,
                input2: null,
                transposedData: null,
            }
        },
        async created() {
            await DataService.getPetugas()
                .then(response => {
                    this.petugasOptions = response.data
                    console.log('petugasOptions', this.petugasOptions.data)
                })
                .catch(error => {
                    console.log(error)
                })

            await DataService.getData2()
                .then(response => {
                    this.data2View = response.data
                    this.input = new Array(this.data2View[0].length).fill(false).map(() => new Array(Object
                        .keys(this
                            .data2View[0]).length).fill(false))

                    this.input = new Array(11).fill(false).map(() => new Array(3).fill(false));

                })
                .catch(error => {
                    console.log(error)
                })

            await DataService.getData3()
                .then(response => {
                    this.data3View = response.data
                    this.datas2nd = this.data3View.filter(({
                        var2
                    }) => var2 === '1x')
                })
                .catch(error => {
                    console.log(error)
                })

            // await DataService.getDataSBR(1)
            //     .then(response => {
            //         var x = response.data
            //         console.log('response.data', x)
            //         console.log('SBR', x.data.data_sbr)
            //         this.data2View[0] = x.data.data_sbr
            //         delete this.data2View[0]['tabel']
            //         this.datas2nd = x.data.data_assessment
            //         delete this.datas2nd[0]['id_spool']
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })

            // var thekeys = Object.keys(this.data2View[0])
            // var myObj = {}
            // thekeys.forEach(element => {
            //     myObj[element] = null
            // });

            // this.selectedData = myObj
            // console.log('created selectedData', this.selectedData)
            // this.transpose(this.data2View[0])


            // this.transposeData(this.datas2nd)


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
            async getUserData($id) {
                console.log('userid', $id)
                // await DataService.getDataSBR($id)
                //     .then(response => {
                //         var x = response.data
                //         console.log('response.data', x)
                //         console.log('SBR', x.data.data_sbr)
                //         this.data2View[0] = x.data.data_sbr
                //         this.userSummary = x.data.summary
                //         delete this.data2View[0]['tabel']
                //         this.datas2nd = x.data.data_assessment
                //         delete this.datas2nd[0]['id_spool']

                //         var thekeys = Object.keys(this.data2View[0])
                //         var myObj = {}
                //         thekeys.forEach(element => {
                //             myObj[element] = null
                //         });

                //         this.selectedData = myObj
                //         console.log('created selectedData', this.selectedData)
                //         this.transpose(this.data2View[0])
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })

                await DataService.getDummySBR()
                    .then(response => {
                        var x = response.data
                        console.log('response.data', x)
                        console.log('SBR', x.data.data_sbr)
                        this.data2View[0] = x.data.data_sbr
                        this.userSummary = x.data.summary
                        delete this.data2View[0]['tabel']
                        // delete this.data2View[1]['tabel']
                        this.datas2nd = x.data.data_assessment
                        console.log(this.datas2nd)

                        for (let index = 0; index < this.datas2nd.length; index++) {
                            // const element = array[index];
                            delete this.datas2nd[index]['id_spool']

                            this.datas2nd[index]['no_telepon'] = {
                                "ekstensi": this.datas2nd[index]['ekstensi'],
                                "no_telepon": this.datas2nd[index]['no_telepon'],

                            }
                            this.datas2nd[index]['no_fax'] = {
                                "no_fax": this.datas2nd[index]['no_fax']
                            }
                            this.datas2nd[index]['email'] = {
                                "email": this.datas2nd[index]['email']
                            }
                            this.datas2nd[index]['website'] = {
                                "website": this.datas2nd[index]['website']
                            }
                            delete this.datas2nd[index]['ekstensi']
                            // delete this.datas2nd[index]['no_fax']
                        }

                        // delete this.datas2nd[0]['id_spool']
                        // delete this.datas2nd[1]['id_spool']
                        // delete this.datas2nd[0]['ekstensi']
                        // delete this.datas2nd[1]['ekstensi']

                        var thekeys = Object.keys(this.data2View[0])
                        var myObj = {}
                        thekeys.forEach(element => {
                            myObj[element] = null
                        });

                        this.selectedData = myObj
                        console.log('created selectedData', this.selectedData)
                        this.transpose(this.data2View[0])
                    })
                    .catch(error => {
                        console.log(error)
                    })
                console.table('datas2nd', this.datas2nd)
            },
            editValueSelected(data1, data2, key){
                console.log('data1',data1,'data2', data2.data.variabel,'key', key)
                console.log('selectedValue', this.selectedData[data2.data.variabel])
                this.selectedKey = data2.data.variabel
                this.editedValue = data1
                this.displayBasic2 = true
            },
            editValue2(data1, data2, key) {
                console.log(data1, data2.data[key])
                if (data1 === data2.data[key]) {
                    console.log('value', data2.data[key])
                    console.log('data tr', this.transposedData[data2.index][key])
                    this.selectedKey = key
                    this.selectedIndex = data2.index
                    this.editedValue = data2.data[key]
                    this.displayBasic2 = true
                }
            },
            editValue(data1, data2, key) {
                console.log(data1, data2.data.value)
                if (data1 === data2.data.value) {
                    console.log('value', data2.data.value)
                    console.log('data tr', this.transposedData[data2.index][key])
                    this.selectedKey = key
                    this.selectedIndex = data2.index
                    this.editedValue = data2.data.value
                    this.displayBasic2 = true
                }
            },
            transpose(data) {
                console.log('data yg mau di transpose', data)
                this.transposedData = Object.entries(data).map(([variabel, value]) => ({
                    variabel,
                    value
                }))
                console.log('transposedData', this.transposedData.length)
                console.log('datas2nd length', this.datas2nd[0])

                for (let index1 = 0; index1 < this.datas2nd.length; index1++) {
                    console.log('length sumber assessment', this.datas2nd.length)
                    var element = this.datas2nd[index1];
                    element = Object.entries(element).map(([variabel, value]) => ({
                        variabel,
                        value
                    }))


                    console.log('el23', element[23])

                    for (let index2 = 0; index2 < Object.values(element).length; index2++) {
                        let indexH = index1 + 1
                        let newSumber = "sumber" + indexH
                        console.log('element', element)
                        console.log('element length', element.length)
                        console.log('newSumber', newSumber)
                        console.log('index2', index2)

                        this.transposedData[index2][newSumber] = element[index2].value

                    }


                }
                console.table('transposedData Table', this.transposedData)


                //    Object.assign(this.transposedData[0], {key3: "value3"});
                //     console.log(this.transposedData[0])

            },
            async submit() {
                console.log(typeof this.selectedData)
                console.log('selectedDataFinal', this.selectedData)
                console.log('selectedData : ', Object.assign(this.selectedData))

                // this.$store.dispatch('compareTable/setSelectedData', Object.assign(this.selectedData), {
                //     root: true
                // })
                this.selectedData['petugas_assessment'] = 1
                console.log('selectedDataFinal', this.selectedData)
                await DataService.postDataSBR(this.selectedData).then(function (response) {
                        console.log(response);
                        this.$toast.add({
                            severity: 'success',
                            summary: 'Yeay!',
                            detail: 'Data berhasil disubmit :)',
                            life: 3000
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


                var thekeys = Object.keys(this.data2View[0])
                var myObj = {}
                thekeys.forEach(element => {
                    myObj[element] = null
                });

                // this.selectedData = myObj

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
    .p-progressbar .p-progressbar-label {
        color: white;
        line-height: 1.5rem;
    }

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