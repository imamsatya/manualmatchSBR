<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <div class="p-grid p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-3 ">
      <!-- <div class="p-col-12 ">

         <Card  @mouseover="myShadow = ''" @mouseleave="myShadow = ''"
          :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-2 animate__animated animate__fadeIn '"
          style="border-radius: 18px; ">

          <template #content>
            
          <Dropdown :class="myCardBgColorData+' '+myTextColorData" v-model="selectedVariabelSumber" :options="opsiVariabelSumber" @change="tes(selectedVariabelSumber)"  optionLabel="name" placeholder="Pilih Data" />
            
          </template>

        </Card><br>






        <div class="p-buttonset">
          <Button label="Compare"
            @click="active = 0; buttonCompareActive= 'buttonCompareActive';buttonDataSourceActive='';"
            :class="myCardBgColorData+' '+myTextColorData+' '+buttonCompareActive+' p-button-lg'"
            style="border: 0px;width: 50%;border-top-left-radius: 20px;" icon="pi pi-table" />
          <Button label="Selected Data"
            @click="active = 1;buttonCompareActive= '';buttonDataSourceActive='buttonDataSourceActive'"
            :class="myCardBgColorData+' '+myTextColorData+' '+buttonDataSourceActive+' p-button-lg'"
            style="border: 0px;width: 50%;border-top-right-radius: 20px;" icon="pi pi-database" />

        </div>

        <hr class="">








      </div> -->

      <div class="p-col-12 ">
         <CompareTable5></CompareTable5>

        <!-- <Card v-show="active == 0" @mouseover="myShadow = ''" @mouseleave="myShadow = ''"
          :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-2 animate__animated animate__fadeInLeft '"
          style="border-radius: 18px; ">

          <template #content>
            
         
            <CompareTable5></CompareTable5>

            
          </template>

        </Card> -->

        <!-- <Card v-show="active == 1" @mouseover="myShadow = ''" @mouseleave="myShadow = ''"
          :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-2 animate__animated animate__fadeInRight '"
          style="border-radius: 18px; ">

          <template #content>
            
            <SelectedDataTable></SelectedDataTable>
          </template>

        </Card> -->
      </div>


    </div>







  </div>
</template>

<script>

  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  // import CompareTable from '@/components/CompareTable.vue'
  // import CompareTable2 from '@/components/CompareTable2.vue'
  // import CompareTable3 from '@/components/CompareTable3.vue'
  import CompareTable5 from '@/components/CompareTable5.vue'
  // import DataService from '../services/DataService'
  // import SelectedDataTable from '@/components/SelectedDataTable.vue'
 
  
  export default {
    name: 'Assessment',
    components: {
      // CompareTable: () => import('../components/CompareTable.vue')
      // CompareTable,
      // CompareTable2,
      // CompareTable3,
      
      CompareTable5,
      // SelectedDataTable
        
    },
    data() {
      return {
        selectedSumber: null,
        mergedDataView: [],
        options: [
			{name: 'Sumber A', code: 'NY'},
			{name: 'Sumber B', code: 'RM'},],
        dataView: [],
        data1View: [],
        data2View: [],
        data3View: [],
        myShadow: '',
        active: 0,
        buttonCompareActive: 'buttonCompareActive',
        buttonDataSourceActive: '',
        tabMenuItems: [{
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            to: '',
          },
          {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar',
            to: '',
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            to: ''
          },
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-file',
            to: ''
          },
          {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            to: ''
          }
        ]
      }
    },
  //  async created() {
  //    await DataService.getData1()
  //       .then(response => {
  //         this.data1View = response.data
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })

  //     await  DataService.getData2()
  //       .then(response => {
  //         this.data2View = response.data
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })


  //    await  DataService.getData3()
  //       .then(response => {
  //         this.data3View = response.data
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //       this.mergedDataView = Object.assign({},this.data1View, this.data2View)
  //       // this.mergedDataView = [this.data1View, this.data2View]
  //       console.log(this.mergedDataView[0])
  //       console.log(this.mergedDataView[1])
  //   },
    computed: {
      myCardBgColorData() {
        return this.$store.state.mainstyle.myCardBgColorData
      },
      myTextColorData() {
        return this.$store.state.mainstyle.myTextColorData
      }
    },
    methods: {
      dropDownOptions(data, index){
        
        console.log('dropdown clicked')
        console.log(data['data'].var1)
        console.log(`index ${index}`)

        const a =  this.data1View.filter(x => x.var1 === data['data'].var1 )
        // const aa = JSON.stringify(a)
        // const aaa = JSON.stringify({ a, toJSON(){ return a; } })
        console.log(`a ${Object.entries(a)}`)
      }
    }
  }
</script>

<style lang="css">
  .buttonCompareActive {
    background-color: #9155fd;
    color: white;
  }

  .buttonDataSourceActive {
    background-color: #9155fd;
    color: white;
  }

  

  .p-dropdown .p-dropdown-label.p-placeholder{
         color: v-bind(textColor) !important;
    }

  /* .p-tabmenu{
  background-color: aqua;
}

.p-tabmenuitem{
  background-color: red;

}
.p-highlight{
  background-color: red !important;background: red;
}
.p-tabmenu-nav{
  background-color: red !important;background: red !important;
}
.p-menuitem-text{
  background-color: red !important;background: red;
} */
  /* .ul{
  background-color: red;
} */
</style>