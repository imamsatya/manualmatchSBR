<template>
    <div>
        <Toast />
        <!-- <Dropdown :class="myCardBgColorData+' '+myTextColorData" v-model="selectedVariabelSumber"
            :options="opsiVariabelSumber" optionLabel="name" placeholder="Pilih Variabel Sumber" />
        {{ selectedVariabelSumber['name']}}
        <br><br> -->

        <!-- <p>Options 0 : {{options[0][0]['name']}}</p> -->
        <!-- {{this.finalSelectedData}} <br><br>

        {{this.selectedData}} -->
        <div :class="'p-col-12 p-lg-12 p-ml-2 p-mr-2 ' ">
            <Breadcrumb :home="home" :model="items" />
        </div>

        <!-- {{selectedKegiatan}} -->
        <!-- {{kegiatanOptions }} -->
        <Dropdown v-if="kegiatanOptions !== null"
            :class="'p-col-12 p-lg-12  '+myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-2 animate__animated animate__fadeIn '"
            v-model="selectedKegiatan" :options="kegiatanOptions.data" optionLabel="name" :filter="true"
            placeholder="Pilih Kegiatan" :showClear="true" @change="getKegiatanData(selectedKegiatan)"
            style="border-radius: 14px;">
            <template #value="slotProps">
                <div class="data-item data-item-value" v-if="slotProps.value">

                    <div>{{slotProps.value.name}}</div>
                </div>
                <span v-else>
                    {{slotProps.placeholder}}
                </span>
            </template>
            <template #option="slotProps">
                <div class="data-item">

                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </Dropdown>
        <div v-if="this.successMessage !== null">
            <br><br>
            <img src="../assets/matcha.png" class="hvr-bob mybob p-mt-1 " style="width: 30%; height: 18%;" alt=""
                srcset="">
            <br><br>
            <h1>Selamat. Kamu sudah selesai Matching</h1>
            <h3> Ayo kerja lagi.</h3>
            <p style="font-style: italic; ">
                <span>So little time, so <span style="font-weight: 900;color:#78b34d"> MatchA </span> to do</span></p>

        </div>
        <div v-if="this.errorMessages.length !== 0">
            <br><br>
            <img src="../assets/matcha404.png" class="hvr-bob mybob p-mt-1 " style="width: 30%; height: 18%;" alt=""
                srcset="">
            <br><br>
            <h1>Aww...Jangan Nangis.</h1>
            <h3>Ini cuma error kecil! Ayo kerja lagi.</h3>
            <p style="font-style: italic; ">
                <span>So little time, so <span style="font-weight: 900;color:#78b34d"> MatchA </span> to do</span></p>
            <Message v-for="(error) in this.errorMessages" v-bind:key="error" severity="error">{{error}}</Message>
        </div>
        <div class="p-grid p-jc-center">
            <iframe v-if="this.allData == null && this.errorMessages.length == 0 && this.successMessage == null"
                src="https://embed.lottiefiles.com/animation/106808" style="max-height:100%; overflow: auto;"
                class="p-mt-4" width="500" height="500" frameBorder="0"></iframe>
        </div>
        <div v-if="this.allData !== null" class="p-col-12 p-lg-12">
            <Card @mouseover="myShadow = ''" @mouseleave="myShadow = ''"
                :class="myCardBgColorData+' '+myTextColorData+' '+myShadow+' p-m-2 animate__animated animate__fadeIn '"
                style="border-radius: 14px;">
                <template #title>
                    Progress
                </template>
                <template #content>
                    <div class="p-grid p-jc-center " style=" border-left-color: red; ">
                        <div class="p-col-12 p-lg-3 p-md-12 p-sm-12">
                            <div>
                                <span style="font-size: 40px;"> {{this.allData.data.summary.belum_matching}} </span>
                                <br>
                                Belum Matching
                            </div>
                        </div>
                        <div class="p-col-1">
                            <Divider layout="vertical" />
                        </div>
                        <div class="p-col-12 p-lg-3 p-md-12 p-sm-12">
                            <div>
                                <span style="font-size: 40px;"> {{this.allData.data.summary.sudah_matching}} </span>
                                <br>
                                Sudah Matching
                            </div>
                        </div>
                        <div class="p-col-1">
                            <Divider layout="vertical" />
                        </div>
                        <div class="p-col-12 p-lg-3 p-md-12 p-sm-12">
                            <div>
                                <span style="font-size: 40px;"> {{this.allData.data.summary.total_data_matching}}
                                </span>
                                <br>
                                Total
                            </div>
                        </div>
                        <div class="p-col-12 p-mt-4">
                            <ProgressBar style="color: #ffffff !important;"
                                :value="((this.allData.data.summary.sudah_matching/this.allData.data.summary.total_data_matching)*100).toFixed(2)" />
                            <!-- <ProgressBar style="color:white;" :value="(2/3*100).toFixed(2)" /> -->
                        </div>
                    </div>
                </template>
            </Card>


        </div>


        <!-- <div class="sticky" v-if="this.sbrData !== null">

            <DataTable :value="[this.sbrData]" responsiveLayout="scroll" showGridlines
                :class="myCardBgColorData+' '+myTextColorData+' '+' p-m-2 animate__animated animate__fadeIn '"
                style="border-radius: 18px;">

                <Column style="width: 1%;"></Column>
                <Column style="width: 1%;"></Column>
                <Column field="nama_perusahaan" style="width: 25%;" header="Nama Perusahaan">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.nama_perusahaan}}
                        </div>
                    </template>

                </Column>
                <Column field="alamat" header="Alamat">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.alamat}}
                        </div>
                    </template>
                </Column>
                <Column field="provinsi" header="Kode Provinsi">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.provinsi}}
                        </div>
                    </template>
                </Column>
                <Column field="kabupaten_kota" header="Kode Kabupaten/Kota">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.kabupaten_kota}}
                        </div>
                    </template>
                </Column>
                <Column field="kecamatan" header="Kode Kecamatan">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.kecamatan}}
                        </div>
                    </template>
                </Column>
                <Column field="kelurahan_desa" header="Kode Kelurahan/Desa">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.kelurahan_desa}}
                        </div>
                    </template>
                </Column>
                <Column field="nomor_telepon" header="No Telepon">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.nomor_telepon}}
                        </div>
                    </template>
                </Column>
                <Column field="aktivitas_perusahaan" header="Aktivitas Perusahaan">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.aktivitas_perusahaan}}
                        </div>
                    </template>
                </Column>
                <Column field="kbli_aktivitas" header="Kode KBLI">
                    <template #body="slotProps">
                        <div>
                            {{slotProps.data.kbli_aktivitas}}
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div> -->
        <div v-if="this.sbrData !== null" class="p-col-12   p-grid p-jc-between p-m-2 p-p-2">

            <Button style="font-weight: 900;border-radius: 14px;" label="Skip" icon="pi pi-forward"
                class="p-col-12 p-lg-6 p-button-info  p-grid p-jc-center    p-ripple p-button-lg " @click="skip()">
                <i class="pi pi-forward p-mr-2"></i> Skip
            </Button>
            <Button style="font-weight:900;border-radius: 14px;"
                :label="'Submit '+'( '+this.selectedData.filter(x => x === true).length + ' )'"
                class="p-col-12 p-lg-6  p-button-success p-grid p-jc-center   p-ripple p-button-lg  " icon="pi pi-send"
                @click="submit()">
                <i class="pi pi-send p-mr-2"></i> Submit <Badge
                    :value="this.selectedData.filter(x => x === true).length" class="mr-2" size="large"
                    severity="danger"></Badge>
            </Button>
        </div>
        <!-- rowGroupMode="subheader"  :groupRowsBy="selectedVariabelSumber['name']" sortMode="single"-->
        <DataTable id="myTable" v-if="this.matchingData !== null" :frozenValue="lockedData" :value="this.matchingData"
            v-model:filters="filters" filterDisplay="menu" :scrollable="true" scrollHeight="800px" showGridlines
            :sortOrder="1" :paginator="false" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll" :rowHover="true" dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            class="p-datatable-sm p-m-2 animate__animated animate__fadeIn"
            :globalFilterFields="['nama_perusahaan','alamat','kode_provinsi','kode_kabupaten_kota','kode_kecamatan','kode_kelurahan_desa','nomor_telepon','aktivitas_perusahaan','kbli_aktivitas']">
            <template #empty>
                <h5>Data Kosong</h5>
            </template>
            <template #loading>
                Mohon menunggu;
            </template>
            <template #header>
                <div class=" p-col-12 p-grid p-jc-between">

                    <div class="p-jc-start p-col-12 p-lg-3 p-mr-6">
                        <h5 class="">Tabel Matching</h5>
                    </div>
                    <div class=" p-col-12 p-lg-3 p-mt-2 p-mr-4 "><span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                        </span></div>
                </div>

                <!-- <div class="flex justify-content-between align-items-center">
                    <h2 class="m-0">Tabel Matching</h2>
                    
                 </div> -->
            </template>

            <Column header="Select" style="min-width:60px">
                <!-- <template #header="slotProps" style="min-width:200px">
                    <Checkbox :id="slotProps.index + 1 +slotProps.length" v-model="checked"
                        @change="checkBoxCheck(checked)" :binary="true" />
                    <label class="p-ml-2" :for="slotProps.index + 1 +slotProps.length">Select All</label>
                </template> -->

                <template :class="myCardBgColorData+' '+myTextColorData" #body="slotProps">
                    <div v-if="!slotProps.frozenRow" class="p-d-flex p-jc-center p-ai-center ">
                        <Checkbox :id="slotProps.index" class="p-ml-4" v-model="selectedData[slotProps.index]"
                            :binary="true" />
                    </div>
                    <!-- <div v-else class="frozenRowBg">
                    </div> -->
                </template>
            </Column>
            <!-- <Column header="No" style="min-width:200px">
                <template :class="myCardBgColorData+' '+myTextColorData" #body="slotProps">
                    <div style="cursor: pointer"
                        @click="selectedData[slotProps.index] ? this.selectedData[slotProps.index]=false : this.selectedData[slotProps.index]=true">
                        {{slotProps.index + 1}}</div>
                    
                </template>
            </Column> -->
            <Column field="skor_kalo" header="Skor" style="min-width:60px">
                <template #body="col">

                    <div v-if="!col.frozenRow"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.skor_kalo}}

                    </div>
                    <div v-else class="frozenRowBg">
                    </div>
                </template>
            </Column>
            <Column field="nama_perusahaan" header="Nama Perusahaan" style="min-width:160px">
                <template #body="col">
                    <div v-if="!col.frozenRow"
                        :class="(this.sbrData['nama_perusahaan'] == col.data.nama_perusahaan && this.sbrData['nama_perusahaan'] != null)  ? 'bgMatch' : 'bgNoMatch'"
                        :style="this.sbrData['nama_perusahaan'] == col.data.nama_perusahaan  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.nama_perusahaan}}
                    </div>
                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.nama_perusahaan}}
                    </div>
                </template>
            </Column>
            <Column field="alamat" header="Alamat" style="min-width:200px">
                <template #body="col">
                    <div v-if="!col.frozenRow"
                        :class="(this.sbrData['alamat'] == col.data.alamat && this.sbrData['alamat'] != null)  ? 'bgMatch' : 'bgNoMatch'"
                        :style="this.sbrData['alamat'] == col.data.alamat  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.alamat}}

                    </div>
                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.alamat}}
                    </div>
                </template>
            </Column>
            <Column field="kode_provinsi" header="Kode Provinsi" style="min-width:100px">
                <template #body="col">
                    <div :class="(this.sbrData['kode_provinsi'] == col.data.kode_provinsi && this.sbrData['kode_provinsi'] != null)  ? 'bgMatch' : 'bgNoMatch'"
                        v-if="!col.frozenRow" v-tooltip.bottom="col.data.nama_provinsi" @dblclick="changeBgTable()"
                        :style="this.sbrData['kode_provinsi'] == col.data.kode_provinsi  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.kode_provinsi}}


                    </div>

                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.kode_provinsi}}
                    </div>
                </template>
            </Column>
            <Column field="kode_kabupaten_kota" header="Kode Kabupaten / Kota" style="min-width:100px">
                <template #body="col">
                    <div :class="(this.sbrData['kode_kabupaten_kota'] == col.data.kode_kabupaten_kota && this.sbrData['kode_kabupaten_kota'] != null )  ? 'bgMatch' : 'bgNoMatch'"
                        v-if="!col.frozenRow" v-tooltip.bottom="col.data.nama_kabupaten_kota"
                        :style="this.sbrData['kode_kabupaten_kota'] == col.data.kode_kabupaten_kota  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.kode_kabupaten_kota}}

                    </div>

                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.kode_kabupaten_kota}}
                    </div>


                </template>
            </Column>
            <Column field="kode_kecamatan" header="Kode Kecamatan" style="min-width:120px">
                <template #body="col">
                    <div :class="(this.sbrData['kode_kecamatan'] == col.data.kode_kecamatan && this.sbrData['kode_kecamatan'] != null )   ? 'bgMatch' : 'bgNoMatch'"
                        v-if="!col.frozenRow" v-tooltip.bottom="col.data.nama_kecamatan"
                        :style="this.sbrData['kode_kecamatan'] == col.data.kode_kecamatan  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.kode_kecamatan}}

                    </div>

                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.kode_kecamatan}}
                    </div>
                </template>
            </Column>
            <Column field="kode_kelurahan_desa" header="Kode Kelurahan / Desa" style="min-width:100px">
                <template #body="col">
                    <div :class="(this.sbrData['kode_kelurahan_desa'] == col.data.kode_kelurahan_desa  && this.sbrData['kode_kelurahan_desa'] != null ) ? 'bgMatch' : 'bgNoMatch'"
                        v-if="!col.frozenRow" v-tooltip.bottom="col.data.nama_kelurahan_desa"
                        :style="this.sbrData['kode_kelurahan_desa'] == col.data.kode_kelurahan_desa  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.kode_kelurahan_desa}}

                    </div>

                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.kode_kelurahan_desa}}
                    </div>


                </template>
            </Column>
            <Column field="nomor_telepon" header="No Telepon" style="min-width:140px">
                <template #body="col">
                    <div :class="(this.sbrData['nomor_telepon'] == col.data.nomor_telepon && this.sbrData['nomor_telepon'] != null )  ? 'bgMatch' : 'bgNoMatch'"
                        v-if="!col.frozenRow"
                        :style="this.sbrData['nomor_telepon'] == col.data.nomor_telepon  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.nomor_telepon}}

                    </div>

                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.nomor_telepon}}
                    </div>
                </template>
            </Column>
            <Column field="aktivitas_perusahaan" header="Aktivitas Perusahaan" style="min-width:200px">
                <template #body="col">
                    <div :class="(this.sbrData['aktivitas_perusahaan'] == col.data.aktivitas_perusahaan && this.sbrData['aktivitas_perusahaan'] != null) ? 'bgMatch' : 'bgNoMatch'"
                        v-if="!col.frozenRow"
                        :style="this.sbrData['aktivitas_perusahaan'] == col.data.aktivitas_perusahaan  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.aktivitas_perusahaan}}

                    </div>

                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.aktivitas_perusahaan}}
                    </div>
                </template>
            </Column>
            <Column field="kbli_aktivitas" header="Kode KBLI" style="min-width:100px">
                <template #body="col">
                    <div :class="(this.sbrData['kbli_aktivitas'] == col.data.kbli_aktivitas && this.sbrData['kbli_aktivitas'] != null ) ? 'bgMatch' : 'bgNoMatch'"
                        v-if="!col.frozenRow"
                        :style="this.sbrData['kbli_aktivitas'] == col.data.kbli_aktivitas  ? 'color: white; font-weight:700;' : ''"
                        @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                        {{col.data.kbli_aktivitas}}

                    </div>

                    <div v-if="col.frozenRow" class="frozenRowBg" style="color: #9155fd; font-weight: 700;">
                        {{col.data.kbli_aktivitas}}
                    </div>
                </template>
            </Column>


            <!-- <Column style="cursor: pointer" v-for="(col,index2) of Object.keys(this.myData[0])" :field="col"
                :class="myCardBgColorData+' '+myTextColorData" :header="col" :key="col">
                <template #body="col">
                    <div  @click="selectedData[col.index] ? this.selectedData[col.index]=false : this.selectedData[col.index]=true">
                    {{col.data[Object.keys(this.myData[0])[index2]]}}
                 
                    </div>
                </template>
            </Column> -->

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




            <!-- <template :class="myCardBgColorData+' '+myTextColorData" #groupheader="slotProps" >

                
                <span>
              
                    {{slotProps.data.var1}}
                </span>


            </template> -->




        </DataTable>
        <!-- <ProgressSpinner v-else /> -->
        <!-- <Dialog    :closable="false" :draggable="false" v-model:visible="loadingDialog" :style="{width: '30vw', opacity:0.5}" :modal="true">
            <div class=" p-ai-center p-grid p-jc-center ">
                <ProgressSpinner />
                <MyLoading style="opacity: 1 !important" />
            </div>
        </Dialog> -->

        <Loading v-model:active="loadingDialog" :is-full-page="true" :color="'#86d166'" :background-color="'black'"
            :opacity="0.7">
            <slot>

                <MyLoading></MyLoading>
            </slot>
        </Loading>
        <!-- <MyLoading v-if="loadingDialog"  style="position: absoulte"/> -->

    </div>
</template>

<script>
    import DataService from '../services/DataService'
    // import ToastService from 'primevue/toastservice';
    import Toast from 'primevue/toast';
    // import ProgressSpinner from 'primevue/progressspinner';
    import Checkbox from 'primevue/checkbox';
    import ProgressBar from 'primevue/progressbar';
    // import Dialog from 'primevue/dialog'
    import Tooltip from 'primevue/tooltip'
    import Badge from 'primevue/badge';
    import {
        FilterMatchMode,
        FilterOperator
    } from 'primevue/api';
    import InputText from 'primevue/inputtext';
    import Breadcrumb from 'primevue/breadcrumb';
    import Message from 'primevue/message'
    import MyLoading from '../components/MyLoading.vue'


    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'CompareTable',
        directives: {
            'tooltip': Tooltip
        },
        components: {
            // CompareTable: () => import('../components/CompareTable.vue')
            // ProgressSpinner,
            Badge,
            // ToastService,
            Toast,
            Checkbox,
            ProgressBar,
            // Dialog,
            InputText,
            Breadcrumb,
            Message,
            MyLoading,
            Loading
        },
        data() {
            return {
                home: {
                    icon: 'pi pi-home',
                    to: '/'
                },
                items: [{
                        label: 'Matching'
                    },

                ],
                filters: {
                    'global': {
                        value: null,
                        matchMode: FilterMatchMode.CONTAINS
                    },
                    'name': {
                        operator: FilterOperator.AND,
                        constraints: [{
                            value: null,
                            matchMode: FilterMatchMode.STARTS_WITH
                        }]
                    },
                    'country.name': {
                        operator: FilterOperator.AND,
                        constraints: [{
                            value: null,
                            matchMode: FilterMatchMode.STARTS_WITH
                        }]
                    },
                    'representative': {
                        value: null,
                        matchMode: FilterMatchMode.IN
                    },
                    'date': {
                        operator: FilterOperator.AND,
                        constraints: [{
                            value: null,
                            matchMode: FilterMatchMode.DATE_IS
                        }]
                    },
                    'balance': {
                        operator: FilterOperator.AND,
                        constraints: [{
                            value: null,
                            matchMode: FilterMatchMode.EQUALS
                        }]
                    },
                    'status': {
                        operator: FilterOperator.OR,
                        constraints: [{
                            value: null,
                            matchMode: FilterMatchMode.EQUALS
                        }]
                    },
                    'activity': {
                        value: null,
                        matchMode: FilterMatchMode.BETWEEN
                    },
                    'verified': {
                        value: null,
                        matchMode: FilterMatchMode.EQUALS
                    }
                },
                lockedData: [{
                    id_perusahaan: "",
                    idsbr: "",
                    nama_perusahaan: "",
                    nama_komersial: "",
                    alamat: "",
                    skor_matching: "",
                    rank_nama: "",
                    rank_alamat: "",
                    skor_kalo: "",
                    kode_pos: "",
                    nomor_telepon: "",
                    kbli_aktivitas: "",
                    provinsi_id: "",
                    nama_provinsi: "",
                    kode_provinsi: "",
                    kabupaten_kota_id: "",
                    nama_kabupaten_kota: " ",
                    kode_kabupaten_kota: "",
                    kecamatan_id: "",
                    nama_kecamatan: " ",
                    kode_kecamatan: "",
                    kelurahan_desa_id: "",
                    nama_kelurahan_desa: " ",
                    kode_kelurahan_desa: ""
                }],

                // lockedData: null, 
                loadingDialog: false,
                allData: null,
                sbrData: null,
                matchingData: null,
                selectedKegiatan: null,
                kegiatanOptions: null,
                mySelectedValue: [],
                checked: false,
                // tablestyle
                headerBg: '#ffffff',
                textColor: '#726b7c',
                bgNoMatch: null,
                //
                opsiVariabelSumber: [],
                selectedVariabelSumber: '',
                selectedSumber2: null,
                mergedDataView: [],
                options: [],
                selectedData: null,
                finalSelectedData: [],
                selectedCars: [],

                //error
                errorMessages: [],
                successMessage: null,
            }
        },



        async created() {
            await DataService.getKegiatanActiveMatching()
                .then(response => {
                    this.kegiatanOptions = response.data
                    console.log('kegiatanOptions', this.kegiatanOptions)
                })
                .catch(error => {
                    console.log(error)
                })
            // await DataService.getData1()
            //     .then(response => {
            //         // this.data1View = response.data
            //         this.$store.dispatch('compareTable/setData', response.data, {
            //             root: true
            //         })
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
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
            this.selectedData = new Array(this.myData.length).fill(false)


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
            },
            currentUser() {
                return this.$store.state.auth.user
            }
        },
        watch: {
            myCardBgColorData(newX, oldX) {
                console.log(`new ${newX}`)
                if (newX == 'mydarkcardcolor') {
                    this.headerBg = '#312d4b'
                    this.textColor = '#cfcbe4'
                    this.changeBgTable()
                } else {
                    this.headerBg = '#ffffff'
                    this.textColor = '#726b7c'
                    this.changeBgTable()
                }
                console.log(`old ${oldX}`)
            },

        },

        methods: {
            changeBgTable() {
                const frozen = document.querySelectorAll(".frozenRowBg");
                for (let i = 0; i < frozen.length; i++) {
                    frozen[i].parentElement.style.backgroundColor = 'lightgray';
                }

                const match = document.querySelectorAll(".bgMatch");
                for (let i = 0; i < match.length; i++) {
                    match[i].parentElement.style.backgroundColor = '#56ca00';
                }

                const noMatch = document.querySelectorAll(".bgNoMatch");
                for (let i = 0; i < noMatch.length; i++) {
                    if (this.headerBg == '#ffffff') {

                        noMatch[i].parentElement.style.backgroundColor = '#ffffff';
                    } else {

                        noMatch[i].parentElement.style.backgroundColor = '#312d4b';
                    }

                }
            },
            async skip() {
                this.loadingDialog = true
                await DataService.getDataMatching(this.selectedKegiatan.id_kegiatan, this.currentUser.id)
                    .then(response => {

                        this.allData = response.data
                        this.sbrData = this.allData.data.spool
                        this.matchingData = this.allData.data.matching
                        console.log('response.data', this.allData)
                        console.log('sbrData', this.sbrData)
                        this.selectedData = new Array(this.matchingData.length).fill(false)

                        this.lockedData[0]['nama_perusahaan'] = this.sbrData['nama_perusahaan']
                        this.lockedData[0]['alamat'] = this.sbrData['alamat']
                        this.lockedData[0]['kode_provinsi'] = this.sbrData['kode_provinsi']
                        this.lockedData[0]['kode_kabupaten_kota'] = this.sbrData['kode_kabupaten_kota']
                        this.lockedData[0]['kode_kecamatan'] = this.sbrData['kode_kecamatan']
                        this.lockedData[0]['kode_kelurahan_desa'] = this.sbrData['kode_kelurahan_desa']
                        this.lockedData[0]['nomor_telepon'] = this.sbrData['nomor_telepon']
                        this.lockedData[0]['aktivitas_perusahaan'] = this.sbrData['aktivitas_perusahaan']
                        this.lockedData[0]['kbli_aktivitas'] = this.sbrData['kbli_aktivitas']
                        this.loadingDialog = false
                        this.changeBgTable()

                    })
                    .catch(error => {
                        console.log(error)
                        this.loadingDialog = false
                    })
                this.changeBgTable()
            },
            async submit() {
                try {
                    this.loadingDialog = true

                    var idSbr = []
                    this.finalSelectedData = []
                   
                    for (let index = 0; index < this.selectedData.length; index++) {
                        const element = this.selectedData[index];
                        if (element) {
                            this.finalSelectedData.push(this.matchingData[index])
                        }

                    }
                    if (this.finalSelectedData != []) {
                         this.finalSelectedData.forEach(element => {
                        idSbr.push(element.idsbr)
                    });
                    }
                   
                    const postForm = {
                        "id_alokasi": this.sbrData.id_alokasi,
                        "id_spool": this.sbrData.id_spool,
                        "idsbr": idSbr
                    }
                    console.log('finalSelectedData', this.finalSelectedData)
                    console.log('postForm', postForm)

                    // if (this.finalSelectedData.length !== 0) {

                    // } else {

                    // }

                    await DataService.postDataMatching(this.selectedKegiatan.id_kegiatan, this.currentUser.id,
                            postForm)
                        .then(response => {
                            console.log('responsePost', response)
                            this.getKegiatanData(this.selectedKegiatan).then(response => {
                                console.log('response getKegiatanData', response)
                                this.loadingDialog = false
                            })
                            this.preview(response.data.meta.message, response.data.meta.status)

                        })
                        .catch(error => {
                            console.log(error)
                            this.loadingDialog = false
                        })
                    this.changeBgTable()
                } catch (error) {
                    console.log('err', error)
                }

            },
            async getKegiatanData(data) {
                console.log('selectedKegiatan', data.id_kegiatan)
                this.loadingDialog = true
                await DataService.getDataMatching(data.id_kegiatan, this.currentUser.id)
                    .then(response => {
                        // const myTable =document.getElementsByClassName("p-datatable-table").getElementsByTagName('td')
                        // console.log(myTable, 'myTable')
                        if (response.data.data.summary.sudah_matching == response.data.data.summary
                            .total_data_matching) {
                            // alert('Selamat. Kamu sudah selesai Matching!.')
                            this.errorMessages = []
                            this.successMessage = "Selamat. Kamu sudah selesai Matching"
                            this.loadingDialog = false
                            this.allData = null
                            this.sbrData = null
                            this.matchingData = null

                        } else {
                            this.allData = response.data
                            this.sbrData = this.allData.data.spool
                            this.matchingData = this.allData.data.matching
                            console.log('response.data', this.allData)
                            console.log('sbrData', this.sbrData)
                            console.log('lockedCustomer', this.lockedData)
                            this.selectedData = new Array(this.matchingData.length).fill(false)
                            // this.lockedData = this.matchingData[0]

                            this.lockedData[0]['nama_perusahaan'] = this.sbrData['nama_perusahaan']
                            this.lockedData[0]['alamat'] = this.sbrData['alamat']
                            this.lockedData[0]['kode_provinsi'] = this.sbrData['kode_provinsi']
                            this.lockedData[0]['kode_kabupaten_kota'] = this.sbrData['kode_kabupaten_kota']
                            this.lockedData[0]['kode_kecamatan'] = this.sbrData['kode_kecamatan']
                            this.lockedData[0]['kode_kelurahan_desa'] = this.sbrData['kode_kelurahan_desa']
                            this.lockedData[0]['nomor_telepon'] = this.sbrData['nomor_telepon']
                            this.lockedData[0]['aktivitas_perusahaan'] = this.sbrData['aktivitas_perusahaan']
                            this.lockedData[0]['kbli_aktivitas'] = this.sbrData['kbli_aktivitas']
                            console.log('newlockedData', this.lockedData)
                            // delete this.lockedData['provinsi'];
                            this.errorMessages = []
                            this.successMessage = null
                            this.loadingDialog = false
                        }


                    })
                    .catch(error => {
                        console.log(error)
                        console.log('tes error', error.response.data.meta.message)
                        this.allData = null
                        this.sbrData = null
                        this.matchingData = null
                        this.successMessage = null
                        this.errorMessages.push(error.response.data.meta.message)
                        this.loadingDialog = false
                        // alert(error.response.data.meta.message)

                    })
                this.changeBgTable()
            },
            preview($message, $status) {
                // console.log(this.selectedData.indexOf(true))
                // console.log(indexesOf(this.selectedData, true))
                // for (let index = 0; index < this.selectedData.length; index++) {
                //     const element = this.selectedData[index];
                //     if (element) {
                //         this.finalSelectedData.push(this.matchingData[index])
                //     }

                // }

                this.$toast.add({
                    severity: $status,
                    summary: $status == 'success' ? 'Yeay !' : 'Ups...',
                    detail: $message,
                    life: 3000
                });
            },
            cek(col, index2) {
                console.log(col, index2)
            },
            checkBoxCheck(prop) {
                console.log(prop)
                if (prop == true) {
                    for (let index = 0; index < this.selectedData.length; index++) {
                        this.selectedData[index] = prop

                    }
                } else {
                    for (let index = 0; index < this.selectedData.length; index++) {
                        this.selectedData[index] = prop
                    }
                }

            },
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
                        this.$toast.add({
                            severity: 'success',
                            summary: 'Yeay!',
                            detail: 'Data berhasil dipilih :)',
                            life: 3000
                        })
                    ).then(
                        this.myData.splice(props.index - 1, 2)
                    )
                } catch (error) {
                    console.log(error)
                    this.$toast.add({
                        severity: 'error',
                        summary: 'Huft!',
                        detail: 'Ada Error!',
                        life: 3000
                    })
                }



            }

        }

    }
</script>

<style scope>
    .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    td {
        background-color: v-bind(headerBg);
        color: v-bind(textColor);

    }

    table {
        table-layout: fixed;
    }

    table td {
        width: 9%;
    }



    .p-progressbar-label {
        color: white !important;
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

    .tdMatch {
        background-color: red;
    }

    .p-dropdown .p-dropdown-label.p-placeholder {
        color: v-bind(textColor) !important;
    }

    .p-breadcrumb {
        border: none;
        border-radius: 14px;
    }

    nav {
        background-color: v-bind(headerBg) !important;
        color: v-bind(textColor) !important;
    }

    .p-menuitem-text {
        color: v-bind(textColor) !important;
    }

    .p-breadcrumb ul li.p-breadcrumb-chevron {
        color: v-bind(textColor) !important;
    }

    .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
        color: v-bind(textColor) !important;
    }

    .p-dropdown .p-dropdown-label .p-placeholder {
        color: v-bind(textColor) !important;
    }

    /* Bob */
    @-webkit-keyframes hvr-bob {
        0% {
            -webkit-transform: translateY(-14px);
            transform: translateY(-14px);
        }

        50% {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
        }

        100% {
            -webkit-transform: translateY(-14px);
            transform: translateY(-14px);
        }
    }

    @keyframes hvr-bob {
        0% {
            -webkit-transform: translateY(-14px);
            transform: translateY(-14px);
        }

        50% {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
        }

        100% {
            -webkit-transform: translateY(-14px);
            transform: translateY(-14px);
        }
    }

    @-webkit-keyframes hvr-bob-float {
        100% {
            -webkit-transform: translateY(-14px);
            transform: translateY(-14px);
        }
    }

    @keyframes hvr-bob-float {
        100% {
            -webkit-transform: translateY(-14px);
            transform: translateY(-14px);
        }
    }

    .hvr-bob {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }

    .hvr-bob,
    .hvr-bob,
    .hvr-bob {
        -webkit-animation-name: hvr-bob-float, hvr-bob;
        animation-name: hvr-bob-float, hvr-bob;
        -webkit-animation-duration: .3s, 1.5s;
        animation-duration: .3s, 1.5s;
        -webkit-animation-delay: 0s, .3s;
        animation-delay: 0s, .3s;
        -webkit-animation-timing-function: ease-out, ease-in-out;
        animation-timing-function: ease-out, ease-in-out;
        -webkit-animation-iteration-count: 1, infinite;
        animation-iteration-count: 1, infinite;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-direction: normal, alternate;
        animation-direction: normal, alternate;
    }





    /* .myThemeColor{
    color: v-bind(textColor);
} */

    /* .p-rowgroup-header::deep {
    background-color: v-bind(headerBg) ;
    color: white;
} */
</style>