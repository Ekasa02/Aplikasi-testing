<template>
    <div>
        <div class="py-4 px-4 font-montserrat">
            <div>
                <div class="flex ">
                    <h1 class="text-xl font-semibold">Scenario</h1>
                    <div class="ml-auto">
                        <button class="flex bg-[#EBEBFE] rounded items-center px-1 py-1 float-right">
                            <img src="../assets/Edit.svg"/>
                            <p class="pr-2 ">Edit</p>
                        </button>
                    </div>
                    <div class="pl-2">
                        <button class="flex bg-[#FFE5E6] items-center px-1 py-1 rounded">
                            <img src="../assets/DeleteOutlined.svg"/>
                            <p class="pr-2 ">Delete</p>
                        </button>
                    </div>
                </div>
                <h1 class="font-semibold">Validate Account Registration by filling in all fields with valid data</h1>
                <div class="grid grid-cols-2 gap-4">
                    <div class="w-2/3">
                        <div class="py-2">
                            <h1 class="font-semibold text-xl">Features</h1>
                            <p>Login</p>
                        </div>
                        <div class="py-2">
                            <h1 class="font-semibold text-xl">Test Category</h1>
                            <div>
                                <button class="font-['Montserrat'] flex text-[13px] bg-[#FCD051] text-white leading-[18px] py-2 px-2 rounded ">
                                    <img class="pr-1 h-4" src="../assets/PlusWhite.svg"/>
                                    Positif
                                </button>
                            </div>
                        </div>
                        <div class="py-2">
                            <h1 class="font-semibold text-xl">Pre Condition</h1>
                            <p>Open the Website URL "https://v2.myskill.id"</p>
                        </div>
                        <div class="py-2">
                            <h1 class="font-semibold text-xl">Test Steps</h1>
                            <ul>
                                <li v-for="number in numbers" :key="number">{{ number }}. </li>
                            </ul>
                        </div>
                        <div class="py-2">
                            <h1 class="font-semibold text-xl">Expectation</h1>
                            <p>When the user is directed to the login page to log in, a notification 'Login successful!' appears, and the user is redirected to the home page.</p>
                        </div>
                    </div>
                    <div class="w-1/3">
                        <add-result></add-result>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddResult from './AddResult.vue';
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5,6,7] // Daftar angka yang ingin ditampilkan
    }
  },
  components:{
    AddResult,
  }
}
</script>