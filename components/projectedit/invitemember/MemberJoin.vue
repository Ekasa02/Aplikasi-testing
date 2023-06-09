<template>
    <div>
        <div class="font-montserrat pb-14">
            <h1 class="pt-8 font-semibold text-[16px] leading-6 ">Member</h1>
            <button class="float-right text-[#554AF0]" @hideMember="hideMember">
                <p  >See all</p>
            </button>
            <PopupMember v-if="popup" />
            <!-- <p class="font-medium text-[#808080] leading-5">None</p> -->
            <img src="../../assets/Profil.svg" class="w-[60px] h-[60px] pt-3 rounded-full"  alt="Profile picture">
        </div>
        
    </div>
</template>
<script>
import PopupMember from '../invitemember/member/PopupMember.vue'
export default{
    components:{
        PopupMember
    },
    data(){
        return{
            popup: false,
        }
    },
    methods:{
        hideMember(){
            this.popup=true
        },
    }
}
</script>