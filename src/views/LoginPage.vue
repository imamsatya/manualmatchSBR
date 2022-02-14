<template>
    <div class="p-grid p-jc-center p-ai-center vertical-container "
        style="min-height: 100vh; min-width: 100vh; background-color: #f4f5fa; color: #726b7c;">


        <Card style="width: 25rem; margin-bottom: 2em; color: #726b7c;" class="p-shadow-6">
            <template #title>
                <br>
               <div style="font-weight: 700">Assessment App</div> 
            <br>
            </template>
            <template #content>
                <div class="p-fluid  ">
                    <div class="p-grid p-jc-start p-ml-3 p-mb-6">
                        <span class="p-mb-3" style="font-size: 24px; font-weight: 600;">Halo, Selamat Datang! 👋🏻 </span> 
                        <span>Silakan masuk ke akun Anda dan mulai bekerja</span> 
                    </div>
                   
                    <div class="field p-mb-4 p-ml-3 p-mr-3 col-12 md:col-12 sm:col-12">
                        <span class="p-float-label p-input-icon-left">
                            <i class="pi pi-envelope" />
                            
                            <InputText id="inputtext"  class="p-inputtext-lg" type="text" v-model="email" />
                            <label for="inputtext">Email</label>
                        </span>
                    </div>
                    <div class="field p-mb-4 p-ml-3 p-mr-3 col-12 md:col-12 sm:col-12">
                        <span class="p-float-label p-input-icon-left">
                            <i class="pi pi-lock" />
                            <InputText id="inputtext-left" class="p-inputtext-lg" type="password"
                                v-model="password" />
                            <label for="inputtext-left">Password</label>
                        </span>
                    </div>
                    <div class="field p-mb-4 p-ml-3 p-mr-3 col-12 md:col-12 sm:col-12">
                         <router-link to="/home" @click="visibleLeft = false">
                           <Button label="Login" icon="" class="p-mb-2 " />
                        </router-link><br>
                    
                    <Button label="SSO BPS" class="p-button-info " icon="" />
                    </div>
                </div>
            </template>
        </Card>


    </div>



</template>
<script>
    import InputText from 'primevue/inputtext';
    export default {
        components: {
            InputText
        },
        data() {
            return {
                email: null,
                password: null,

            }
        }
    }
</script>
<style scoped>
    .vertical-container {
        margin: 0;
        height: 200px;
        background: var(--surface-d);
        border-radius: 4px;
    }
</style>