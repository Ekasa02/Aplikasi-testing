<template>
    <div class="bg-[#FBFBFC] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
        <div class="bg-white rounded-lg shadow-lg pl-10 pr-10 ">
            <div>
                <profil-pict></profil-pict>
            </div>
            <div>
                <email-member></email-member>
            </div>
            <div>
                <name-profile></name-profile>
            </div>
            <div>
                <button-save></button-save>
            </div>
        </div>
    </div>
</template>

<script>
import EmailMember from "../projectedit/invitemember/EmailMember.vue";
import ProfilPict from "../profil/ProfilPict.vue";
import NameProfile from "../profil/NameProfile.vue";
import ButtonSave from "../profil/ButtonSave.vue";

export default {
    components:{
        ProfilPict,
        EmailMember,
        NameProfile,
        ButtonSave,
    }
}
</script>
