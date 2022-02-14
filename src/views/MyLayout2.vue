<template>
    <div :class="myBgColorData+' '+myTextColorData">
        <div :class="myBgColorData+ ' '+'p-grid p-ai-stretch nested-grid p-nogutter'" style="margin:0;">
            <Sidebar v-model:visible="visibleLeft" :class="myBgColorData+' '+myTextColorData" style="margin:0">
                <div class="animate__animated animate__slideInLeft animate__faster" style="margin:0">
                    <div class="p-d-flex p-jc-start">
                        <h2 class="p-ml-4">Aplikasi Assessment SBR</h2>
                    </div>



                    <br>
                    <div class="p-d-flex p-grid p-jc-between ">
                        <div :class="myBgColorData+' '+myTextColorData" style="border-color: transparent;">
                            <router-link to="/home" @click="visibleLeft = false">
                                <div :class="myTextColorData+ ' hvr-fade'"
                                    style="padding: 10px;font-size: 20px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 150%;margin-left: 10px;">

                                    <div>
                                        <i class="pi pi-th-large p-mr-3 p-ml-3"></i>
                                        Dashboard
                                    </div>
                                </div>
                            </router-link><br>


                            <div @click="subMenuTrigerred()" :class="myTextColorData+ ' hvr-fade'+' '+selectedMenu"
                                style="padding: 10px;font-size: 20px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 150%;margin-left: 10px;">

                                <div>
                                    <i :class="MenuIcon+' p-mr-3 p-ml-3'"></i>
                                    Menu
                                </div>
                            </div>


                            <div v-show="subMenu" class="animate__animated animate__fadeIn animate__faster">

                                <router-link to="/home" @click="visibleLeft = false">
                                    <div :class="myTextColorData+ ' hvr-fade'"
                                        style="padding: 10px;font-size: 16px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 150%;margin-left: 10px;">

                                        <div>
                                            <i class="pi pi-circle p-mr-3 p-ml-3"></i>
                                            Menu 1
                                        </div>
                                    </div>
                                </router-link><br>
                                <router-link to="/home" @click="visibleLeft = false">
                                    <div :class="myTextColorData+ ' hvr-fade'"
                                        style="padding: 10px;font-size: 16px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 150%;margin-left: 10px;">

                                        <div>
                                            <i class="pi pi-circle p-mr-3 p-ml-3"></i>
                                            Menu 2
                                        </div>
                                    </div>
                                </router-link><br>
                                <router-link to="/home" @click="visibleLeft = false">
                                    <div :class="myTextColorData+ ' hvr-fade'"
                                        style="padding: 10px;font-size: 16px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 150%;margin-left: 10px;">

                                        <div>
                                            <i class="pi pi-circle p-mr-3 p-ml-3"></i>
                                            Menu 3
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <br>

                            <router-link to="/home" @click="visibleLeft = false">
                                <div :class="myTextColorData+ ' hvr-fade'"
                                    style="padding: 10px;font-size: 20px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 150%;margin-left: 10px;">

                                    <div>
                                        <i class="pi pi-th-large p-mr-3 p-ml-3"></i>
                                        Assessment
                                    </div>
                                </div>
                            </router-link><br>

                                 <router-link to="/matching" @click="visibleLeft = false">
                                <div :class="myTextColorData+ ' hvr-fade'"
                                    style="padding: 10px;font-size: 20px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 150%;margin-left: 10px;">

                                    <div>
                                        <i class="pi pi-th-large p-mr-3 p-ml-3"></i>
                                        Matching
                                    </div>
                                </div>
                            </router-link><br><br>













                        </div>
                    </div>
                </div>
            </Sidebar>


            <div :class="contentClass + ' '+ myBgColorData">

                <div class="p-col-12">
                    <br>
                    <div>

                        <div class="p-d-flex p-ai-stretch p-jc-between">
                            <Button icon="pi pi-bars" @click="sideBar()"
                                class="p-button-text p-button-lg  p-button-secondary p-button-rounded p-ml-4" />
                            <div>

                                <Button :icon="darklightIcon"
                                    class="p-button-text p-button-rounded  p-button-secondary p-button-lg p-mr-2"
                                    @click="darklight() " />
                                <Button icon="pi pi-user" @click="toggle"
                                    class="p-button-text p-button-rounded p-button-secondary p-mr-6 p-button-lg" />

                                <OverlayPanel ref="op" :class="myBgColorData+' '+myTextColorData">
                                    <div @click="darklight()" :class="myTextColorData+ ' p-ml-3 p-mr-3 '" 
                                        style="cursor: pointer;font-size: 20px;font-weight: 600; border-radius: 30px; text-decoration: none;width: 100%;">

                                        <div >
                                            <i class="pi pi-sign-out p-mr-2 "></i>
                                            Logout
                                        </div>
                                    </div> 
                                    
                              

                                   

                                </OverlayPanel>
                            </div>
                        </div>
                        <br>
                    </div>

                </div>

                <div class="p-col-10  p-offset-1">
                    <div class="" style=" min-height: 100vh;">
                        <router-view />
                    </div>
                </div>







            </div>

        </div>
        <div :class="myBgColorData+' '+myTextColorData+' p-col-12'" style="bottom: 0;   width: 100%; ">



            <div class="p-d-flex p-ai-stretch p-jc-between ">
                <p class="p-ml-6">COPYRIGHT © 2022 <span style="color: #00aeef;font-weight: 700;">B</span><span
                        style="color: #8cc63f;font-weight: 700;">P</span><span
                        style="color: #f7941e;font-weight: 700;">S</span>, All rights Reserved </p>
                <div>

                    <p class="p-mr-6"><span style="font-weight: 700;">&lt; /&gt;</span> dengan <i
                            class="p-ml-2 pi pi-heart-fill animate__animated animate__flash animate__slow animate__infinite	infinite "
                            style="color: #D32F2F"></i></p>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import OverlayPanel from 'primevue/overlaypanel';
    export default {
        components: {
            OverlayPanel
        },
        data() {
            return {
                selectedMenu: '',
                subMenu: false,
                MenuIcon: 'pi pi-chevron-right',
                darklightIcon: 'pi pi-moon',

                showsidebar: false,
                visibleLeft: false,
                sidebarClass: "p-col-0 p-md-0 p-lg-0",
                contentClass: "p-col-12 p-md-12 p-lg-12",

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
        },
        created() {

        },
        computed: {
            myBgColorData() {
                return this.$store.state.mainstyle.myBgColorData
            },
            myTextColorData() {
                return this.$store.state.mainstyle.myTextColorData
            }
        },
        methods: {
            subMenuTrigerred() {
                if (this.subMenu == false) {
                    this.subMenu = true
                    this.MenuIcon = 'pi pi-chevron-down'
                    this.selectedMenu = 'selectedMenu'
                } else {
                    this.subMenu = false
                    this.MenuIcon = 'pi pi-chevron-right'
                    this.selectedMenu = ''
                }
            },
            sideBar() {
                if (this.sidebarClass == "p-col-0 p-md-0 p-lg-0") {
                    // this.sidebarClass = "p-col-2 p-md-2 p-lg-2"
                    // this.contentClass = "p-col-10 p-md-10 p-lg-10"
                    this.showsidebar = true
                    this.visibleLeft = true
                } else {
                    // this.sidebarClass = "p-col-0 p-md-0 p-lg-0"
                    // this.contentClass = "p-col-12 p-md-12 p-lg-12"
                    // this.showsidebar = false
                }
            },
            darklight() {
                if (this.myBgColorData == 'mydarkbgcolor') {
                    // this.myBgColorData = 'mylightbgcolor'
                    this.darklightIcon = 'pi pi-moon'
                    this.$store.dispatch('mainstyle/setTheme', 'mylightbgcolor', {
                        root: true
                    })
                } else {
                    this.darklightIcon = 'pi pi-sun'
                    this.$store.dispatch('mainstyle/setTheme', 'mydarkbgcolor', {
                        root: true
                    })
                }
            },
            toggle(event) {
                this.$refs.op.toggle(event);
            }
        }
    }
</script>

<style>
    .mydarkbgcolor {
        background-color: #28243d;
    }

    .mylightbgcolor {
        background-color: #f4f5fa;
    }

    .mydarkcardcolor {
        background-color: #312d4b;
    }

    .mylightcardcolor {
        background-color: #ffffff
    }

    .mydarktext-color {
        color: #cfcbe4;
    }

    .mylighttext-color {
        color: #726b7c;
    }

    .selectedMenu {
        background-color: #9155fd;
        color: white;

    }


    .hvr-fade {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        overflow: hidden;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: color, background-color;
        transition-property: color, background-color;
    }

    .hvr-fade:hover,
    .hvr-fade:focus,
    .hvr-fade:active {
        background-color: #9155fd;
        color: white;
    }

    .myhover:hover{
         background-color: #9155fd;
    }
</style>