<template>
    <div>

        <p>mySelectedData : {{mySelectedData}}</p>
        <p>Options : {{options}}</p>
        <p>Kekurangan : <br>
            variabel grup harus jadi varibel dengan index 1 (bisa ga bisa) <br>
            kolom belum dinamis (row sudah) (udh dinamis)<br>
            alogirtma selected belum efisien karena pakai temp array dengan length samadengan length data (harusnya
            cukup dibagi 2 tapi takut kenapa2) <br>
            belum bisa filter kolom karena harus di gruping <br>

        </p>


         <Toast />
        <Dropdown :class="myCardBgColorData+' '+myTextColorData" v-model="selectedVariabelSumber"
            :options="opsiVariabelSumber" optionLabel="name" placeholder="Pilih Variabel Sumber" />
        {{ selectedVariabelSumber['name']}}
        <br><br>

        <!-- <p>Options 0 : {{options[0][0]['name']}}</p> -->
        <DataTable v-if="this.selectedSumber2 !== null" :value="myData" rowGroupMode="subheader"
            :groupRowsBy="selectedVariabelSumber['name']" sortMode="single" :sortOrder="1" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll" :rowHover="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
            <template #empty>
                <h5>Data Kosong</h5>
            </template>
            <template #loading>
                Mohon menunggu;
            </template>
            <Column header="No" headerStyle="width:3em;">
                <template :class="myCardBgColorData+' '+myTextColorData" #body="slotProps">
                    {{slotProps.index + 1}}
                    <!-- {{Object.keys(this.myData[1])}} -->
                </template>
            </Column>


            <Column v-for="(col,index) of Object.keys(this.myData[0])" :field="col"
                :class="myCardBgColorData+' '+myTextColorData" :header="col" :key="col">
                <template #body="slotProps">
                   {{'index : ' +index}} <br>
                   {{'slotProps.index : ' + slotProps.index}} <br>
                   <template v-if="slotProps.index % 2 == 0">
                    <RadioButton id="city1" name="city" :value="slotProps.data[col]" v-model="selectedSumber2[slotProps.index][index]" />
                     <label for="city1"> {{slotProps.data[col]}} - {{selectedSumber2[slotProps.index][index]}}</label>
                     </template>

                     <template v-if="slotProps.index % 2 == 1">
                    <RadioButton id="city2" name="city" :value="slotProps.data[col]" v-model="selectedSumber2[slotProps.index -1][index]" />
                     <label for="city2"> {{slotProps.data[col]}} - {{selectedSumber2[slotProps.index-1][index]}}</label>
                     </template>
                </template>

            </Column>

            <!-- <Column :class="myCardBgColorData+' '+myTextColorData" field="var1" header="Nama Perusahaan">
                <template #body="slotProps">
                    {{slotProps.data.var1}}
                </template>
            </Column>

            <Column :class="myCardBgColorData+' '+myTextColorData" field="var2" header="Variabel 2">
                <template #body="slotProps">
                    {{slotProps.data.var2}}
                </template>
            </Column>

            <Column :class="myCardBgColorData+' '+myTextColorData" field="var3" header="Variabel 3">
                <template #body="slotProps">
                    {{slotProps.data.var3}}
                </template>
            </Column>

            <Column :class="myCardBgColorData+' '+myTextColorData" field="var4" header="Variabel 4">
                <template #body="slotProps">
                    {{slotProps.data.var4}}
                </template>
            </Column>

            <Column :class="myCardBgColorData+' '+myTextColorData" field="var5" header="Variabel 5">
                <template #body="slotProps">
                    {{slotProps.data.var5}}
                </template>
            </Column> -->



            <Column :class="myCardBgColorData+' '+myTextColorData" field="" header="Assessment">

            </Column>

            <template :class="myCardBgColorData+' '+myTextColorData" #groupheader="slotProps">


                <span>
                    <!-- {{slotProps.data[this.selectedVariabelSumber.name]}} -->
                    {{slotProps.data.var1}}
                </span>


            </template>
            <!-- <template :class="myCardBgColorData+' '+myTextColorData" #groupfooter="slotProps">
              
                <td></td>
                <template v-for="(col, index) of Object.keys(this.myData[0])" :key="col">
                    <td v-if="index !== 1" :class="myCardBgColorData+' '+myTextColorData+' '">
                        <Dropdown :class="myCardBgColorData+' '+myTextColorData+' '"
                            @click="dropDownOptions(slotProps.index)"
                            v-model="selectedSumber2[slotProps.index-((slotProps.index+1)/2)][index]"
                            :options="options[slotProps.index-((slotProps.index+1)/2)]" optionLabel="name"
                            :placeholder="`Pilih Sumber ${col}`" />



                    </td>
                </template>
               
                <td :class="myCardBgColorData+' '+myTextColorData+' '">
                    <Button label="Submit"
                        @click="active = 0; buttonCompareActive= 'buttonCompareActive';buttonDataSourceActive='';submitData(slotProps)"
                        :class="myCardBgColorData+' '+myTextColorData+' '" style="border: 0px;border-radius: 20px;"
                        icon="pi pi-send" />
                </td>



            </template> -->



        </DataTable>
        <ProgressSpinner v-else />
    </div>
</template>

<script>
    import DataService from '../services/DataService'
    // import ToastService from 'primevue/toastservice';
    import Toast from 'primevue/toast';
    import ProgressSpinner from 'primevue/progressspinner'
     import RadioButton from 'primevue/radiobutton'
    export default {
        name: 'CompareTable',
        components: {
            // CompareTable: () => import('../components/CompareTable.vue')
            ProgressSpinner,
            RadioButton,
            // ToastService,
            Toast
        },
        data() {
            return {
                city: null,
                mySelectedValue: [],
                // tablestyle
                headerBg: '#ffffff',
                textColor: '#726b7c',
                opsiVariabelSumber: [],
                selectedVariabelSumber: '',
                selectedSumber2: null,
                mergedDataView: [],
                options: [],
            }
        },


        async created() {
            await DataService.getData1()
                .then(response => {
                    // this.data1View = response.data
                    this.$store.dispatch('compareTable/setData', response.data, {
                        root: true
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            console.log(this.myData.length)
            // this.myData.forEach((element, index) => {
            //     // console.log(Object.keys(element).length)
            //     const myLength = Object.keys(element).length
            //     console.log(index)
            //     for (let index2 = 0; index2 <= myLength-1; index2++) {
            //         this.selectedSumber[index][index2] = 'a'    
            //     }
            // });
            Object.keys(this.myData[0]).forEach(element => {
                const opsiVariabel = {
                    name: element
                }
                this.opsiVariabelSumber.push(opsiVariabel)
            });

            console.log(this.opsiVariabelSumber)

            this.selectedSumber2 = new Array(this.myData.length).fill('a').map(() => new Array(Object.keys(this
                .myData[0]).length).fill('a'));


            //  for (let index = 0; index < this.myData.length; index++) {
            //     const element = this.myData[index];
            //     console.log(`index ${index} || element ${element}`) 
            //     const myLength = Object.keys(element).length;
            //     for (let index2 = 0; index2 < myLength; index2++) {
            //         console.log(`index ${index} || element ${index2}`)
            //         this.selectedSumber2[index][index2] = 'a' 

            //     }

            // }

            console.log(`selectedSumber : ${this.selectedSumber}`)
            console.log(`selectedSumber2 : ${this.selectedSumber2}`)
            // console.log(this.selectedSumber2)


        },
        computed: {
            myCardBgColorData() {
                return this.$store.state.mainstyle.myCardBgColorData
            },
            myTextColorData() {
                return this.$store.state.mainstyle.myTextColorData
            },
            myData() {
                return this.$store.state.compareTable.myData
            },
            mySelectedData() {
                return this.$store.state.compareTable.mySelectedData
            }
        },
        watch: {
            myCardBgColorData(newX, oldX) {
                console.log(`new ${newX}`)
                if (newX == 'mydarkcardcolor') {
                    this.headerBg = '#312d4b'
                    this.textColor = '#cfcbe4'
                } else {
                    this.headerBg = '#ffffff'
                    this.textColor = '#726b7c'
                }
                console.log(`old ${oldX}`)
            }
        },

        methods: {
            submitData(props) {
                console.log('selected Valuenya : ', this.selectedSumber2[props.index - ((props.index + 1) / 2)])
                console.log('props', props)
                const arrayKolom = this.selectedSumber2[props.index - ((props.index + 1) / 2)]
                const row1 = Object.values(this.myData[props.index - 1])
                const row2 = Object.values(this.myData[props.index])
                const keys = Object.keys(this.myData[props.index - 1])
                const dataRow1 = this.myData[props.index - 1]
                const dataRow2 = this.myData[props.index]
                this.mySelectedValue.new = dataRow1
                this.mySelectedValue.old = {
                    oldData1: dataRow1,
                    oldData2: dataRow2
                }
                arrayKolom.forEach((element, index) => {
                    if (index !== 1) {
                        console.log(element.name, index)

                        var index1 = row1.indexOf(element.name.toString())
                        var index2 = row2.indexOf(element.name.toString())
                        console.log(index1, index2)

                        if (index1 !== -1) {
                            console.log('true, valuenya ada di index1')
                            this.mySelectedValue.new[[keys[index]]] = row1[index]
                            console.log('var', this.mySelectedValue.new[index])

                        } else {
                            console.log('false')
                            this.mySelectedValue.new[[keys[index]]] = row2[index]
                            console.log('var', this.mySelectedValue.new[index])
                        }
                    }
                })
                console.log('keys : ', keys)
                console.log('Selected : ', this.mySelectedValue.new[keys[0]])
                console.log('All added Data: ', this.mySelectedValue)
                this.addSelectedValue(this.mySelectedValue, props)
               
            },
            // selectData(data, lastIndex) {
            //     console.log(`data : ${data}`)
            //     console.log(`data.index : ${data.index}`)
            //     console.log(`last index ${lastIndex}`)
            //     console.log(`old Data 1 : ${Object.values(this.myData[data.index-1])}`)
            //     console.log(`old Data 2 : ${Object.values(this.myData[data.index])}`)
            //     console.log(`old Var 1 : ${Object.values(this.myData[data.index-1])[lastIndex]}`)
            //     console.log(`old Var 2 : ${Object.values(this.myData[data.index])[lastIndex]}`)
            //     console.log(`old Key 1 : ${Object.keys(this.myData[data.index-1])[lastIndex]}`)
            //     console.log(`old Key 2: ${Object.keys(this.myData[data.index])[lastIndex]}`)
            //     console.log(`all Key 1 : ${Object.keys(this.myData[data.index-1])}`)
            //     console.log(`all Key 2: ${Object.keys(this.myData[data.index])}`)
            //     console.log(
            //         `selectedSumber2 : ${Object.values(this.selectedSumber2[data.index-((data.index+1)/2)][lastIndex])}`
            //     )
            //     // const choosenVar = Object.values(this.selectedSumber2[data.index-((data.index+1)/2)][lastIndex])
            //     const selectedValue = Object.values(this.selectedSumber2[data.index - ((data.index + 1) / 2)][
            //         lastIndex
            //     ])
            //     const var1 = Object.values(this.myData[data.index - 1])[2]
            //     const var2 = Object.values(this.myData[data.index])[2]
            //     const values1 = Object.values(this.myData[data.index - 1])
            //     const values2 = Object.values(this.myData[data.index])
            //     const index = values1.indexOf(selectedValue.toString())
            //     const index2 = values2.indexOf(selectedValue.toString())
            //     console.log(`selectedValue : ${selectedValue}`)
            //     console.log(`var1 : ${var1}`)
            //     console.log(`var2 : ${var2}`)
            //     console.log(`values : ${values1}`)
            //     console.log(`index : ${index}`)
            //     console.log(`index2 : ${index2}`)
            //     // const varX = selectedValue.toString()
            //     var newData = []
            //     var oldData = {
            //         oldData1: Object.values(this.myData[data.index - 1]),
            //         oldData2: Object.values(this.myData[data.index])
            //     }
            //     if (index !== -1) {
            //         console.log('true', Object.values(this.myData[data.index - 1])[lastIndex])


            //         newData.new = Object.values(this.myData[data.index - 1])
            //         newData.old = oldData
            //         newData.new[lastIndex] = Object.values(this.myData[data.index - 1])[lastIndex]
            //     } else {
            //         console.log('false')
            //         newData.new = Object.values(this.myData[data.index])
            //         newData.old = oldData
            //         newData.new[lastIndex] = Object.values(this.myData[data.index])[lastIndex]
            //     }

            //     console.log(`newData : ${Object.values(newData)}`)




            // },

            dropDownOptions(index) {
                console.log(`index1 : ${index} `)
                // this.selectedSumber[index1]=[]
                const options = [{
                        name: this.myData[index - 1].var2,
                        // value: this.myData[index-1]
                    },
                    {
                        name: this.myData[index].var2,
                        // value:this.myData[index]
                    }
                ]
                //  this.$store.dispatch('compareTable/setSelectedData', , {
                //     root: true
                // })
                // this.selectedSumber[index-((index+1)/2)][0] = this.myData[index-1].var2
                // this.selectedSumber[index-((index+1)/2)][1] = this.myData[index].var2
                // this.selectedSumber[index-((index+1)/2)][2] = this.myData[index].var2
                console.log(`selectedSumber: ${this.selectedSumber}`)
                this.options[index - ((index + 1) / 2)] = (options)
            },
            addSelectedValue(p, props) {

                try {
                     this.$store.dispatch('compareTable/setSelectedData', p, {
                    root: true
                }).then(
                     this.$toast.add({severity:'success', summary: 'Yeay!', detail:'Data berhasil dipilih :)', life: 3000})
                ).then(
                    this.myData.splice(props.index-1, 2)
                )
                } catch (error) {
                    console.log(error)
                    this.$toast.add({severity:'error', summary: 'Huft!', detail:'Ada Error!', life: 3000})
                }
                

               
            }

        }

    }
</script>

<style scope>
    td {
        background-color: v-bind(headerBg);
        color: v-bind(textColor);
    }


    .p-datatable-thead {
        background-color: v-bind(headerBg);
        color: v-bind(textColor);
    }

    .p-paginator {
        background-color: v-bind(headerBg);
        color: v-bind(textColor);
    }

    .p-dropdown-label {
        background-color: v-bind(headerBg);
        color: v-bind(textColor);
    }

    /* .myThemeColor{
    color: v-bind(textColor);
} */

    /* .p-rowgroup-header::deep {
    background-color: v-bind(headerBg) ;
    color: white;
} */
</style>