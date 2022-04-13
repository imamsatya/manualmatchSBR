<template>
    <div>

        <div class="p-col-12 p-lg-12">
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

        <!-- <div v-if="this.data2View !== null && this.data3View !== null && this.selectedData !== null">
            <div class="  p-mt-4">

            </div>

        </div> -->


        <div v-if="this.transposedData !== null">

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
                                    :value="(userSummary['sudah_assessment']/userSummary['total_data_assessment'])*100" />
                                <!-- <ProgressBar style="color:white;" :value="(2/3*100).toFixed(2)" /> -->
                            </div>
                        </div>
                    </template>
                </Card>


            </div>
        </div>


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
                            class="p-ml-2">
                            <!-- @dblclick="editValue2(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps, 'sumber'+(index2))" -->
                            {{slotProps.data.value}}
                        </label>
                    </div>

                    <div v-if="slotProps.data.variabel == 'telepon' ||
                    slotProps.data.variabel == 'email' ||
                    slotProps.data.variabel == 'fax' ||
                    slotProps.data.variabel == 'website'">
                        <div>
                            <!-- <RadioButton :id="slotProps.index" name="item2" :value="slotProps.data.value"
                                v-model="selectedData[Object.keys(this.data2View[0])[slotProps.index]]" />
                            <label
                                @click="selectedData[Object.keys(this.data2View[0])[slotProps.index]] = slotProps.data.value"
                                for="slotProps.index" class="p-ml-2">
                                <div v-for="(todo) in slotProps.data.value" v-bind:key="todo">
                                  
                                    <div v-for="(mykey, indexKey) in Object.keys(todo)" v-bind:key="indexKey">
                                        {{mykey}} : {{todo[mykey]}}

                                    </div>
                                    <br>

                                </div>

                            </label> -->
                            <Button label="View" icon="" @click="openDialogObject(slotProps)" class="p-mb-2 p-ripple" />
                        </div>
                    </div>


                </template>
            </Column>

            <template v-for="index2 in this.datas2nd.length" :key="index2">
                <Column :field="'sumber'+(index2)" :class="myCardBgColorData+' '+myTextColorData"
                    :header="'sumber '+(index2) " headerStyle="width:3em;">
                    <template #body="slotProps">
                        <div v-if="slotProps.data.variabel !== 'telepon' &&
                                slotProps.data.variabel != 'email' &&
                                slotProps.data.variabel != 'fax' &&
                                slotProps.data.variabel != 'website'">
                            <RadioButton :id="slotProps.index" name="item2" :value="slotProps.data['sumber'+index2]"
                                v-model="selectedData[Object.keys(this.data2View[0])[slotProps.index]]" />
                            <label
                                @click="selectedData[Object.keys(this.data2View[0])[slotProps.index]] = slotProps.data['sumber'+index2] "
                                for="slotProps.index" class="p-ml-2">{{slotProps.data['sumber'+index2]}}
                            </label>
                        </div>

                        <div v-if="slotProps.data.variabel == 'telepon' ||
                            slotProps.data.variabel == 'email' ||
                            slotProps.data.variabel == 'fax' ||
                            slotProps.data.variabel == 'website'">

                            <!-- <RadioButton :id="slotProps.index" name="item2" :value="slotProps.data['sumber'+index2]"
                                v-model="selectedData[Object.keys(this.data2View[0])[slotProps.index]]" />
                            <label
                                @click="selectedData[Object.keys(this.data2View[0])[slotProps.index]] = slotProps.data['sumber'+index2] "
                                for="slotProps.index" class="p-ml-2">
                                <div v-for="(item,index) in slotProps.data['sumber'+index2]" :key="item">
                                    {{index}} : {{item}} <br>
                                </div>
                            </label> -->
                            <!-- <Button label="View" icon="" class="p-mb-2 p-ripple" /> -->
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
                        @dblclick="editValueSelected(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps)">
                        {{selectedData[Object.keys(this.data2View[0])[slotProps.index]]}}
                        <div @dblclick="editValueSelected(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps)"
                            v-if="selectedData[Object.keys(this.data2View[0])[slotProps.index]] == null">
                            &nbsp;
                        </div>
                    </div>
                    <div @dblclick="editValueSelected(selectedData[Object.keys(this.data2View[0])[slotProps.index]], slotProps)"
                        v-if="slotProps.data.variabel == 'telepon' ||
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

        <Dialog header="Select Data" v-model:visible="displayDialogObject" :style="{width: '50vw'}" :maximizable="true"
            :modal="true">
            <p class="m-0">
                <DataTable :value="display2ndVariabel" responsiveLayout="scroll">
                    <template #header>
                        <div class="flex justify-content-center align-items-center">
                            <h3 class="m-0">Data Assessment</h3>

                        </div>
                    </template>
                    <Column style="width:25%" header="Sumber">
                        <template #body="slotProps">
                            Sumber {{slotProps.index+1}}
                        </template>
                    </Column>
                    <template v-if="this.display2ndVariabel.length !== 0">
                        <template v-for="mykey in Object.keys(display2ndVariabel[0])" :key="mykey">
                            <Column style="width:25%" :field="mykey" :header="mykey"></Column>
                        </template>
                    </template>
                    <Column style="width:25%" header="Action">
                        <template #body="slotProps">
                            <Button icon="pi pi-arrow-down" @click="pushData(slotProps)" class="p-button-raised" />
                        </template>
                    </Column>


                </DataTable>
                <br><br>
                <DataTable :value="displayVariabel" responsiveLayout="scroll">
                    <template #header>
                        <div class="flex justify-content-center align-items-center">
                            <h3 class="m-0">Data SBR</h3> <br>
                            <Toolbar class="mb-4">
                                <template #end>
                                    <Button label="New" icon="pi pi-plus" class="p-button-success mr-2"
                                        @click="openNewKeyDialog()" />
                                </template>
                            </Toolbar>

                        </div>
                    </template>
                    <Column style="width:25%" header="Sumber">
                        <template #body="">
                            SBR
                        </template>
                    </Column>
                    <template v-if="this.displayVariabel.length !== 0">
                        <template v-for="mykey in Object.keys(displayVariabel[0])" :key="mykey">
                            <Column style="width:25%" :field="mykey" :header="mykey"></Column>
                        </template>
                    </template>
                    <Column style="width:25%" header="Action">
                        <template #body="slotProps">

                            <Button icon="pi pi-pencil" @click="editKeySelected(slotProps)"
                                class="p-button-raised p-mr-2" />
                            <Button icon="pi pi-trash" @click="deleteSelectedKeyOption(slotProps)"
                                class="p-button-raised p-button-danger" />
                        </template>
                    </Column>


                </DataTable>



            </p>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" @click="displayDialogObject = false" class="p-button-text" />
                <Button label="Add Data" icon="pi pi-plus"
                    @click="displayDialogObject = false; this.selectedData[this.displayKey] = this.displayVariabel"
                    autofocus />
            </template>
        </Dialog>

        <Dialog header="Edit Key" v-model:visible="displayBasic3" :style="{width: '50vw'}">
            <div v-if="(typeof editedValue == 'object')">
                <div v-if="editedValue.length == null">
                    <div v-for="mykey in Object.keys(editedValue)" :key="mykey">
                        {{mykey}} :
                        <InputText style="width:100%;" v-model="editedValue[mykey]" />
                    </div>
                </div>
                <div v-else>
                    <div v-for="(mykey, index) in editedValue" :key="mykey">
                        <div v-for="(mykey2) in Object.keys(mykey)" :key="mykey2">
                            {{mykey2}}{{' '+(index+1)}}
                            <InputText style="width:100%;" v-model="editedValue[index][mykey2]" />
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div v-else>
                <InputText style="width:100%;" v-model="editedValue" />
            </div>



            <template #footer>
                <Button label="No" icon="pi pi-times" @click="displayBasic3=false" class="p-button-text" />
                <!-- <Button label="Yes" icon="pi pi-check" @click="
                                displayBasic2=false;
                                this.transposedData[selectedIndex][selectedKey] = editedValue;
                                this.selectedData[this.transposedData[selectedIndex]['variabel']] = editedValue
                                " autofocus /> -->
                <Button label="Save" icon="pi pi-check" @click="
                                displayBasic3=false;
                                
                                this.displayVariabel.data = editedValue
                                " autofocus />
            </template>
        </Dialog>

        <Dialog header="Edit Value" v-model:visible="displayBasic2" :style="{width: '50vw'}">
            <div v-if="(typeof editedValue == 'object')">
                <div v-if="editedValue.length == null">
                    <div v-for="mykey in Object.keys(editedValue)" :key="mykey">
                        {{mykey}} :
                        <InputText style="width:100%;" v-model="editedValue[mykey]" />
                    </div>
                </div>
                <div v-else>
                    <div v-for="(mykey, index) in editedValue" :key="mykey">
                        <div v-for="(mykey2) in Object.keys(mykey)" :key="mykey2">
                            {{mykey2}}{{' '+(index+1)}}
                            <InputText style="width:100%;" v-model="editedValue[index][mykey2]" />
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div v-else>
                <InputText style="width:100%;" v-model="editedValue" />
            </div>



            <template #footer>
                <Button label="No" icon="pi pi-times" @click="displayBasic2=false" class="p-button-text" />
                <!-- <Button label="Yes" icon="pi pi-check" @click="
                                displayBasic2=false;
                                this.transposedData[selectedIndex][selectedKey] = editedValue;
                                this.selectedData[this.transposedData[selectedIndex]['variabel']] = editedValue
                                " autofocus /> -->
                <Button label="Save" icon="pi pi-check" @click="
                                displayBasic2=false;
                                
                                this.selectedData[this.selectedKey] = editedValue
                                " autofocus />
            </template>
        </Dialog>

        <Dialog header="Edit Key" v-model:visible="openNew" :style="{width: '50vw'}">


            <div v-for="mykey in Object.keys(displayVariabel[0])" :key="mykey">
                {{mykey}} :
                <InputText style="width:100%;" v-model="editedValue[mykey]" />
            </div>







            <template #footer>
                <Button label="No" icon="pi pi-times" @click="this.openNew=false" class="p-button-text" />
                <!-- <Button label="Yes" icon="pi pi-check" @click="
                                displayBasic2=false;
                                this.transposedData[selectedIndex][selectedKey] = editedValue;
                                this.selectedData[this.transposedData[selectedIndex]['variabel']] = editedValue
                                " autofocus /> -->
                <Button label="Save" icon="pi pi-check" @click="
                                this.openNew=false;
                                
                                this.displayVariabel.push(editedValue)
                                " autofocus />
            </template>
        </Dialog>

        <Dialog header="Mohon Menunggu" v-model:visible="loadingDialog" :style="{width: '30vw'}" :modal="true">
            <div class="p-grid p-jc-center ">
                <ProgressSpinner />
            </div>
        </Dialog>



        <br><br>
        <div v-if="this.errorMessages.length !== 0">
            <Message v-for="(error) in this.errorMessages" v-bind:key="error" severity="error">{{error}}</Message>
        </div>

        <br><br>

        <Button label="Submit" icon="" class="p-mb-2 p-ripple" @click="submit()" /> <br>
        <Toast />
        <!-- {{selectedData}} -->

    </div>
</template>
<script>
    import DataService from '../services/DataService'
    import RadioButton from 'primevue/radiobutton'
    import InputText from 'primevue/inputtext'
    import Toast from 'primevue/toast'
    import Dialog from 'primevue/dialog'
    import ProgressBar from 'primevue/progressbar'
    import Message from 'primevue/message'
    import Toolbar from 'primevue/toolbar'
    import ProgressSpinner from 'primevue/progressspinner';



    // import Divider from 'primevue/divider'
    // kalau dia 63 variabel

    // import Accordion from 'primevue/accordion';
    // import AccordionTab from 'primevue/accordiontab';
    export default {
        components: {
            // CompareTable: () => import('../components/CompareTable.vue')

            // Paginator,
            ProgressSpinner,
            InputText,
            ProgressBar,
            Message,
            // Divider,
            RadioButton,
            Dialog,
            Toast,
            Toolbar




        },
        data() {
            return {
                loadingDialog: false,
                currentId: null,
                openNew: false,
                errorMessages: [],
                displayKey: null,
                display2ndVariabel: null,
                displayVariabel: [],
                displayDialogObject: false,
                userSummary: null,
                selectedPetugas: null,
                petugasOptions: null,
                selectedKey: null,
                selectedIndex: null,
                editedValue: null,
                displayBasic3: false,
                displayBasic2: false,
                data2View: [],
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

            // await DataService.getData2()
            //     .then(response => {
            //         this.data2View = response.data
            //         this.input = new Array(this.data2View[0].length).fill(false).map(() => new Array(Object
            //             .keys(this
            //                 .data2View[0]).length).fill(false))

            //         this.input = new Array(11).fill(false).map(() => new Array(3).fill(false));

            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })

            // await DataService.getData3()
            //     .then(response => {
            //         this.data3View = response.data
            //         this.datas2nd = this.data3View.filter(({
            //             var2
            //         }) => var2 === '1x')
            //     })
            //     .catch(error => {
            //         console.log(error)
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
            openNewKeyDialog() {
                this.openNew = true
                this.editedValue = {}
                Object.keys(this.displayVariabel[0]).forEach(element => {
                    this.editedValue[element] = null
                });
            },
            deleteSelectedKeyOption(data) {
                console.log('data', data)
                console.log('index', data.index)
                console.log('variabel', this.displayKey)
                console.log('selectedData', this.selectedData)
                console.log('displayVariabel', this.displayVariabel)
                this.displayVariabel.splice(data.index, 1)
            },
            pushData(data) {
                console.log('assessmentData', data)
                this.displayVariabel.push(data.data)
                console.log('updated variabel ', this.displayVariabel)


                var myIndex = this.display2ndVariabel.indexOf(data.data);
                console.log('myIndex', myIndex)
                if (myIndex !== -1) {
                    this.display2ndVariabel.splice(myIndex, 1);
                    console.log('length', this.display2ndVariabel)
                }


            },
            openDialogObject(data) {
                console.log('data.data.value', data.data.value)
                this.displayVariabel = data.data.value
                this.displayKey = data.data.variabel
                console.log('variabel', data.data.variabel)
                console.log('displayVariabel 1st', this.displayVariabel)

                console.log(`length : ${this.displayVariabel.length}`)
                if (this.displayVariabel.length >= 0) {
                    console.log('length', this.displayVariabel.length)
                } else {
                    this.displayVariabel = [this.displayVariabel]
                }
                console.log('theData', data)
                this.display2ndVariabel = []
                if (data.data.variabel == 'telepon') {
                    for (let index = 0; index < this.datas2nd.length; index++) {
                        console.log('index', index)
                        console.log('dataIndex', this.datas2nd[0]['no_telepon'])
                        this.display2ndVariabel.push(this.datas2nd[index]['no_telepon'])
                    }
                }

                if (data.data.variabel == 'fax') {
                    for (let index = 0; index < this.datas2nd.length; index++) {
                        console.log('index', index)
                        console.log('dataIndex', this.datas2nd[0]['no_fax'])
                        this.display2ndVariabel.push(this.datas2nd[index]['no_fax'])
                    }
                }

                if (data.data.variabel == 'email') {
                    for (let index = 0; index < this.datas2nd.length; index++) {
                        console.log('index', index)
                        console.log('dataIndex', this.datas2nd[0]['email'])
                        this.display2ndVariabel.push(this.datas2nd[index]['email'])
                    }
                }

                if (data.data.variabel == 'website') {
                    for (let index = 0; index < this.datas2nd.length; index++) {
                        console.log('index', index)
                        console.log('dataIndex', this.datas2nd[0]['website'])
                        this.display2ndVariabel.push(this.datas2nd[index]['website'])
                    }
                }



                this.displayDialogObject = true
                console.log('2ndVariabel', this.display2ndVariabel)
                console.log('display Variabel', this.displayVariabel)
            },
            async getDataSBR() {
                await DataService.getDataSBR(this.currentId)
                    .then(response => {
                        var x = response.data
                        console.log('response.data', x)
                        console.log('SBR', x.data.data_sbr)
                        this.data2View[0] = x.data.data_sbr
                        this.userSummary = x.data.summary
                        delete this.data2View[0]['tabel']
                        this.datas2nd = x.data.data_assessment
                        delete this.datas2nd[0]['id_spool']

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
            },
            async getUserData($id) {
                console.log('userid', $id)
                this.currentId = $id
                this.getDataSBR()
                // await DataService.getDataSBR(this.currentId)
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

                // await DataService.getDummySBR()
                //     .then(response => {
                //         var x = response.data
                //         console.log('response.data', x)
                //         console.log('SBR', x.data.data_sbr)
                //         this.data2View[0] = x.data.data_sbr
                //         this.userSummary = x.data.summary
                //         delete this.data2View[0]['tabel']
                //         // delete this.data2View[1]['tabel']
                //         this.datas2nd = x.data.data_assessment
                //         console.log('datas2nd', this.datas2nd)

                //         for (let index = 0; index < this.datas2nd.length; index++) {
                //             // const element = array[index];
                //             delete this.datas2nd[index]['id_spool']

                //             this.datas2nd[index]['no_telepon'] = {
                //                 "ekstensi": this.datas2nd[index]['ekstensi'],
                //                 "no_telepon": this.datas2nd[index]['no_telepon'],

                //             }
                //             this.datas2nd[index]['no_fax'] = {
                //                 "no_fax": this.datas2nd[index]['no_fax']
                //             }
                //             this.datas2nd[index]['email'] = {
                //                 "email": this.datas2nd[index]['email']
                //             }
                //             this.datas2nd[index]['website'] = {
                //                 "website": this.datas2nd[index]['website']
                //             }
                //             delete this.datas2nd[index]['ekstensi']
                //             // delete this.datas2nd[index]['no_fax']
                //         }

                //         // delete this.datas2nd[0]['id_spool']
                //         // delete this.datas2nd[1]['id_spool']
                //         // delete this.datas2nd[0]['ekstensi']
                //         // delete this.datas2nd[1]['ekstensi']

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
                // console.table('datas2nd', this.datas2nd)
            },
            editKeySelected(data) {

                this.selectedKey = this.displayKey

                this.editedValue = data.data

                this.displayBasic3 = true
            },
            editValueSelected(data1, data2) {
                console.log('data1', data1, 'data2', data2)
                console.log('selectedValue', this.selectedData[data2.data.variabel])
                this.selectedKey = data2.data.variabel

                if (data1 == null) {
                    this.editedValue = ''
                } else {
                    this.editedValue = data1
                }


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
                this.loadingDialog = true
                console.log(typeof this.selectedData)
                console.log('selectedDataFinal', this.selectedData)
                console.log('selectedData : ', Object.assign(this.selectedData))

                // this.$store.dispatch('compareTable/setSelectedData', Object.assign(this.selectedData), {
                //     root: true
                // })
                this.selectedData['petugas_assessment'] = 1
                console.log('telepon', this.selectedData['telepon'].length)
                console.log('fax', this.selectedData['fax'].length)
                console.log('email', this.selectedData['email'].length)
                console.log('website', this.selectedData['website'].length)
                console.log('selectedDataFinal', this.selectedData)
                if (this.selectedData['telepon'].length !== 3) {

                    // var a = [{
                    //         'ekstensi': null,
                    //         'no_telepon': null
                    //     },
                    //     {
                    //         'ekstensi': null,
                    //         'no_telepon': null
                    //     },
                    //     {
                    //         'ekstensi': null,
                    //         'no_telepon': null
                    //     },
                    // ]
                    // console.log('teslength', Object.entries(this.selectedData['telepon']))
                    // this.selectedData['telepon'] = a

                    var message = "Jumlah ekstensi dan no telepon harus 3 pasang"
                    this.errorMessages.push(message)
                }

                if (this.selectedData['fax'].length !== 2) {

                    // var myfax = [{
                    //         'no_fax': this.selectedData['fax'],
                    //     },
                    //     {
                    //         'no_fax': null,
                    //     }

                    // ]

                    // this.selectedData['fax'] = myfax
                    var messageFax = "Jumlah fax harus 2"
                    this.errorMessages.push(messageFax)
                }

                if (this.selectedData['email'].length !== 2) {

                    // var myemail = [{
                    //         'email': this.selectedData['email'],

                    //     },
                    //     {
                    //         'email': null,
                    //     },
                    // ]
                    // console.log('teslength', Object.entries(this.selectedData['telepon']))
                    // this.selectedData['email'] = myemail
                    var messageEmail = "Jumlah email harus 2"
                    this.errorMessages.push(messageEmail)
                }
                if (this.selectedData['website'].length !== 2) {

                    // var myweb = [{
                    //         'website': this.selectedData['website'],

                    //     },
                    //     {
                    //         'website': null,

                    //     },

                    // ]
                    // console.log('teslength', Object.entries(this.selectedData['telepon']))
                    // this.selectedData['website'] = myweb
                    var messageWeb = "Jumlah Website harus 2"
                    this.errorMessages.push(messageWeb)
                }

                console.log('telepon', this.selectedData['telepon'].length)
                console.log('fax', this.selectedData['fax'].length)
                console.log('email', this.selectedData['email'].length)
                console.log('website', this.selectedData['website'].length)
                console.log('selectedDataFinal x', this.selectedData)

                if (this.errorMessages.length == 0) {
                    await DataService.postDataSBR(this.selectedData).then(response => {
                            console.log(response);

                            this.getDataSBR().then(response => {
                                console.log(response)
                                this.$toast.add({
                                    severity: 'success',
                                    summary: 'Yeay!',
                                    detail: 'Data berhasil disubmit :)',
                                    life: 3000
                                });
                            })
                            this.loadingDialog = false
                            // var thekeys = Object.keys(this.data2View[0])
                            // var myObj = {}
                            // thekeys.forEach(element => {
                            //     myObj[element] = null
                            // });

                            // this.selectedData = myObj

                        })
                        .catch(function (error) {
                            console.log(error);
                            this.$toast.add({
                                severity: 'error',
                                summary: 'Error!',
                                detail: 'Ups, ada error :(',
                                life: 5000
                            });
                        });

                }





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