<template>
    <div>
      {{mySelectedData}} <br><br>
      <Button style="border: 0px;border-radius: 20px;" label="Final Submit" icon="pi pi-send" /><br><br>
        <DataTable :class="myCardBgColorData+' '+myTextColorData" v-if="mySelectedData.length>0" :value="mySelectedData" responsiveLayout="scroll">
             <Column :class="myCardBgColorData+' '+myTextColorData" header="Action" headerStyle="width:3em;">
                <template :class="myCardBgColorData+' '+myTextColorData" #body="slotProps">
                        <Button @click="console.log(slotProps)" icon="pi pi-times" class="p-button-rounded p-button-danger p-button-sm" />

                    <!-- {{Object.keys(this.myData[1])}} -->
                </template>
            </Column>
            <Column  :class="myCardBgColorData+' '+myTextColorData" v-for="col of Object.keys(this.mySelectedData[0])" :field="col" :header="col" :key="col"></Column>
          
        </DataTable>
        <br>
        
    </div>
</template>

<script>
    // import DataService from '../services/DataService'
    export default {
        name: 'CompareTable',
        data() {
            return {

                // tablestyle
                headerBg : '#ffffff',
                textColor: '#726b7c',

                opsiVariabelSumber: [],
                selectedVariabelSumber: '',
                selectedSumber2: null,
                mergedDataView: [],
                options: [],

                dataView: [],
                data1View: [],
                data2View: [],
                data3View: [],
            }
        },


       
        computed: {
            myCardBgColorData() {
                return this.$store.state.mainstyle.myCardBgColorData
            },
            myTextColorData() {
                return this.$store.state.mainstyle.myTextColorData
            },
            myData(){
                return this.$store.state.compareTable.myData
            },
            mySelectedData(){
                return this.$store.state.compareTable.mySelectedData
            }
        },
        watch:{
            myCardBgColorData(newX, oldX){
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
            tes(p){
                console.log(`tes ${p.name}`);
            },
            dropDownOptions(index) {
                console.log(`index1 : ${index} `)

              
                
                // this.selectedSumber[index1]=[]
                
                      const options = [{
                        name: this.myData[index-1].var2,
                        // value: this.myData[index-1]
                    },
                    {
                        name: this.myData[index].var2,
                        // value:this.myData[index]
                    }]

                    //  this.$store.dispatch('compareTable/setSelectedData', , {
                    //     root: true
                    // })
                    // this.selectedSumber[index-((index+1)/2)][0] = this.myData[index-1].var2
                    // this.selectedSumber[index-((index+1)/2)][1] = this.myData[index].var2
                    // this.selectedSumber[index-((index+1)/2)][2] = this.myData[index].var2
                    console.log(`selectedSumber: ${this.selectedSumber}`)
                     this.options[index-((index+1)/2)] = (options)
            
               
                
                
                
               
            }

        }

    }
</script>

<style >
    
</style>