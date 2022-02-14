<template>
    <div style="background-color: #28243d; color: #cecae3;">
        <div style="background-color: #28243d;">
            <br>
            <div class="p-d-flex p-jc-between">
                <Button icon="pi pi-bars" @click="visibleLeft = true" class="p-button-text p-button-rounded p-ml-4" />
                <div>
                    <Button icon="pi pi-check" class="p-button-text p-button-rounded" />
                    <Button icon="pi pi-sun" class="p-button-text p-button-rounded  p-button-warning" />
                    <Button icon="pi pi-user" class="p-button-text p-button-rounded p-button-primary p-mr-4" />
                </div>
            </div>
            <br>
        </div>
        <Sidebar style="background-color: #28243d; color: #cecae3; margin: 0;" :visible="visibleLeft" :baseZIndex="1000"
            :showCloseIcon="false" class="p-sidebar-sm">
            <img src="" alt="">
            <h3>Aplikasi SBR</h3>

           

            <Menu :model="items" style="background-color: #28243d; color: #cecae3; margin: 0; border-color: #28243d;" >
              <template #item="{item}">
                  <br>
                  <div  >
                      <!-- <a :href="item.url">{{item.label}}</a> -->
                      
                       <router-link style="color: #cecae3;text-decoration: none;" to="/" @click="visibleLeft = false">{{item.label}}</router-link>
                  </div>
                
              </template>
            </Menu>



        </Sidebar>

        <div >
            <h1>Content</h1>
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visibleLeft: false,
                items: [{
                        label: 'Dashboard',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.$toast.add({
                                severity: 'success',
                                summary: 'Updated',
                                detail: 'Data Updated',
                                life: 3000
                            });
                        }
                    },
                    {
                        label: 'Setting',
                        icon: 'pi pi-times',
                        command: () => {
                            this.$toast.add({
                                severity: 'warn',
                                summary: 'Delete',
                                detail: 'Data Deleted',
                                life: 3000
                            });
                        }
                    },
                    // {
                    //     label: 'Vue Website',
                    //     icon: 'pi pi-external-link',
                    //     url: 'https://vuejs.org/'
                    // },
                    // {
                    //     label: 'Router',
                    //     icon: 'pi pi-upload',
                    //     to: '/fileupload'
                    // }
                ]


            }
        }
    }
</script>