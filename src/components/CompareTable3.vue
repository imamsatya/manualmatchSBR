<template>
    <div>
        <!-- <div class="p-grid" v-if="this.data2View !== null && this.data3View !==null">
            <div class="p-col-4">
                <ul id="example-1">

                    <div class="p-mb-2" v-for="item in Object.keys(this.data2View[0])" :key="item">
                        {{ item }}
                    </div>
                    <br>
                </ul>
            </div>
            <div class="p-col-4">
                <ul id="example-1">
                    <div class="p-mb-2" v-for="item in this.data2View[0]" :key="item">
                        {{ item }}
                    </div>
                </ul>
            </div>
            <div class="p-col-4">
                <ul id="example-2">
                    <div class="p-mb-2" v-for="item in this.data3View[0]" :key="item">
                        {{ item }}
                    </div>
                </ul>
            </div>
        </div> -->

        <div v-if="this.data2View !== null && this.data3View !== null">

            <!-- {{this.data2View[0]}} <br><br>
            {{this.datas2nd}} <br><br>
            {{this.datas2nd.length}} -->
            <!-- <div class="p-grid p-jc-center p-mt-4">
                <template v-for="(item, index) in this.data2View[0]" :key="item">
                    <div class="p-col-2 p-mr-2 p-mb-2 p-ai-center">
                       <p> {{index}} </p> 
                    </div>
                     <Divider layout="vertical" />

                    <div class=" p-col-4 p-mr-2 p-mb-2">

                        <div class=" p-grid p-jc-between">
                            <div class="p-col-6 p-ai-center">
                                <RadioButton :id="item" :name="item" :value="item" v-model="city[index]" />
                            </div>
                            <div class="p-col-6 p-ai-center">
                                <div class="p-grid p-jc-end">
                                    <div class="col">
                                        <label :for="item" class="p-mr-4">{{item}}</label>
                                    </div>
                                    <div class="col">
                                        <Button @click="input[index] = true" icon="pi pi-pencil" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <br>

                        <div v-if="input[index]" class="p-grid p-jc-end">
                            <InputText id="inputtext-left" class="p-inputtext p-mr-4" :value="item" type="text"
                                v-model="city[index]" />
                            <Button @click="input[index] = false" icon="pi pi-times " class="p-button-danger" />
                            <br>
                        </div>

                    </div>
                     <Divider layout="vertical" />

                    <div class="p-col-4 p-mr-2 p-mb-2">
                        <div class="p-grid p-jc-between">
                            <div class="p-col-6">
                                <RadioButton :id="this.data3View[0][index]" :name="this.data3View[0][index]"
                                    :value="this.data3View[0][index]" v-model="city[index]" />
                            </div>
                            <div class="p-col-6">
                                <div class="p-grid p-jc-end">
                                    <label :for="this.data3View[0][index]"
                                        class="p-mr-4">{{this.data3View[0][index]}}</label>
                                    <Button @click="input[index] = true" icon="pi pi-pencil" />
                                </div>
                            </div>
                        </div>
                        <br>


                        <div v-if="input[index]" class="p-grid p-jc-end">
                            <InputText id="inputtext-left" class="p-inputtext p-mr-4" :value="item" type="text"
                                v-model="city[index]" />
                            <Button @click="input[index] = false" icon="pi pi-times " class="p-button-danger" />
                            <br>
                        </div>
                    </div>
                </template>
            </div> -->
            <div class="p-grid p-jc-center p-mt-4">
                <div class="p-col-3">
                    <Card
                        :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-1 animate__animated animate__fadeInRight '"
                        style="border-radius: 8px;border-color: #4b4764; ">
                        <template #title>
                            <h3>Variabel</h3>
                             <Button @click="input[index] = true" label="Select All" icon="pi pi-check" class="p-button-sm p-button-info" />
                        </template>
                        <template #content>
                            <div>
                                <!-- {{this.data2View[0]}} <br> -->

                                <template v-for="item in Object.keys(this.data2View[0])" :key="item">
                                    <div class="p-grid p-jc-between p-mt-2" style="min-height:100px;">

                                        <div class="p-col-10 ">
                                            <div class="p-grid p-jc-start p-ml-1 p-mb-2">
                                                <label :for="item" class="">{{item}}</label>

                                            </div>
                                        </div>

                                    </div>
                                </template>

                            </div>
                        </template>
                    </Card>
                </div>
                <div class="p-col-3">
                    <Card
                        :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-1 animate__animated animate__fadeInRight '"
                        style="border-radius: 8px;border-color: #4b4764; ">
                        <template #title>
                            <h3>Sumber SBR</h3>
                             <Button @click="input[index] = true" label="Select All" icon="pi pi-check" class="p-button-sm p-button-info" />
                        </template>
                        <template #content>
                            <div>
                                <!-- {{this.data2View[0]}} <br> -->

                                <template v-for="(item, index) in this.data2View[0]" :key="item">
                                    <div class="p-grid p-jc-between p-mt-2" style="min-height:100px;position:relative;">
                                        <div class="p-col-2">
                                            <div class="p-grid p-jsc-start p-ml-2">
                                                <RadioButton :id="item" :name="item" :value="item"
                                                    v-model="city[index]" />
                                            </div>
                                        </div>
                                        <div class="p-col-10 ">
                                            <div class="p-grid p-jc-end p-mr-2 ">
                                                <label :for="item" class="p-mr-4">{{item}} </label>
                                                <Button @click="input[index] = true" icon="pi pi-pencil" class="p-button-sm" />


                                            </div>
                                        </div>
                                        <div v-if="input[index]" class="">
                                            <!-- <InputText id="inputtext-left" class="p-inputtext-sm p-mr-2" :value="item"
                                                type="text" v-model="city[index]" />
                                            <Button @click="input[index] = false" icon="pi pi-times "
                                                class="p-button-danger" /> -->
                                            <div class="p-inputgroup p-col-12 ">
                                                <Button icon="pi pi-check"
                                                    class="p-button-success p-button-sm p-ml-2" />
                                                <InputText v-model="city[index]"  class="p-inputtext-sm" :placeholder="item" />
                                                <Button icon="pi pi-times" @click="input[index] = false"
                                                    class="p-button-danger p-button-sm p-mr-2" />
                                            </div>
                                        </div>



                                    </div>

                                </template>

                            </div>
                        </template>
                    </Card>
                </div>
                <template v-for="item in this.datas2nd" :key="item">
                    <div class="p-col-3">
                        <Card
                            :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-1 animate__animated animate__fadeInRight '"
                            style="border-radius: 8px;border-color: #4b4764; ">
                            <template #title>
                                <h3> {{item['var1']}} </h3>
                                  <Button @click="input[index] = true" label="Select All" icon="pi pi-check" class="p-button-sm p-button-info" />
                            </template>
                            <template #content>
                                <div>
                                    <!-- {{item}} -- {{index}} -->
                                    <template v-for="(x, index2) in item" :key="x">
                                        <div class="p-grid p-jc-between p-mt-2" style="min-height:100px;">
                                            <div class="p-col-2">
                                                <div class="p-grid p-jsc-start p-ml-2">
                                                    <RadioButton :id="x" :name="x" :value="x" v-model="city[index2]" />
                                                </div>
                                            </div>
                                            <div class="p-col-10 ">
                                                <div class="p-grid p-jc-end p-mr-2 p-mb-2">
                                                    <label :for="x" class="p-mr-4">{{x}}</label>
                                                    <Button @click="input[index2] = true" icon="pi pi-pencil"
                                                        class="p-button-sm" />
                                                </div>
                                            </div>

                                        </div>

                                    </template>
                                </div>
                            </template>
                        </Card>
                    </div>
                </template>
            </div>
            <br><br>
            <Button label="Cek" icon="" class="p-mb-2 " @click="preview()" />
        </div>



    </div>
</template>
<script>
    import DataService from '../services/DataService'
    import RadioButton from 'primevue/radiobutton'

    import InputText from 'primevue/inputtext'

    // import Divider from 'primevue/divider'
    export default {
        components: {
            // CompareTable: () => import('../components/CompareTable.vue')

            // Paginator,
            InputText,
            // Divider,
            RadioButton

        },
        data() {
            return {
                data2View: null,
                data3View: null,
                city: null,
                input: null,
                datas2nd: null,
            }
        },
        async created() {
            await DataService.getData2()
                .then(response => {
                    this.data2View = response.data
                    // this.$store.dispatch('compareTable/setData', response.data, {
                    //     root: true
                    // })
                    this.city = new Array(this.data2View[0].length).fill('a').map(() => new Array(Object.keys(
                        this
                        .data2View[0]).length).fill('a'))
                    this.input = new Array(this.data2View[0].length).fill(false).map(() => new Array(Object
                        .keys(this
                            .data2View[0]).length).fill(false))
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







        },
        computed: {
            myCardBgColorData() {
                return this.$store.state.mainstyle.myCardBgColorData
            },
            myTextColorData() {
                return this.$store.state.mainstyle.myTextColorData
            }
        },
        methods: {
            preview() {
                console.log('city : ', this.city)
            }
        }
    }
</script>

<style scoped>
    .cardBg {
        background-color: #9155fd;
        color: white;
    }
</style>