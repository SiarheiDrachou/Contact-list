<template>
    <div>
        <TableForm v-if="isAdd" :data="data" @created="created" :routeData="routeData" />

        <TableList v-show="data" :data="data" @create="create" :routeData="routeData" />
    </div>
</template>

<script>
    import TableList from '../components/Table/TableList'
    import TableForm from '../components/Table/TableForm'

    export default {
        data: function() {
            return {
                routeData: null,
                isAdd: null,
                data: null,
                dataArr: [
                    {
                        id: 872,
                        firstName: "Misty",
                        lastName: "Denard",
                        email: "MLeon@at.io",
                        phone: "(197)147-4759"
                    },
                    {
                        id: 187, 
                        firstName: "Janelle", 
                        lastName: "Engel", 
                        email: "MHippert@vitae.ly", 
                        phone: "(274)602-8041"
                    },
                    {
                        id: 206, 
                        firstName: "RoMeka", 
                        lastName: "Creel", 
                        email: "DOsborne@lacus.gov", 
                        phone: "(990)261-5424"
                    },
                    {
                        id: 384, 
                        firstName: "Siripen", 
                        lastName: "Hatton", 
                        email: "MSpratt@consequat.io", 
                        phone: "(273)456-1737"
                    },
                    {
                        id: 953, 
                        firstName: "Demetrius", 
                        lastName: "Hatter", 
                        email: "ESluka@aenean.io", 
                        phone: "(279)249-2350"
                    },
                    {
                        id: 967, 
                        firstName: "Myra", 
                        lastName: "Wade", 
                        email: "LBorisyuk@pharetra.net", 
                        phone: "(478)038-8100"
                    },
                    {
                        id: 412, 
                        firstName: "Angelina", 
                        lastName: "Peszynski", 
                        email: "DGullion@vel.com", 
                        phone: "(934)037-6866"
                    },
                    {
                        id: 202, 
                        firstName: "Liset", 
                        lastName: "Mazza", 
                        email: "OArias@vestibulum.org", 
                        phone: "(591)505-9726"
                    },
                    {
                        id: 817, 
                        firstName: "Haidi", 
                        lastName: "Emerson", 
                        email: "SMartin@turpis.gov",
                        phone: "(180)237-4923"
                    },
                    {
                        id: 434, 
                        firstName: "Robbin", 
                        lastName: "Colon", 
                        email: "VJacobs@ac.net", 
                        phone: "(684)273-6621"
                    }
                ]
            }
        },
        components: {
            TableList,
            TableForm
        },
        methods: {
            create(isAdd) { // Делаем видимыми поля для ручного ввода данных нового пользователя
                this.isAdd = isAdd;
            },
            created(data, isAdd) { // Добавляем нового пользователя в таблицу после ручного ввода данных
                this.data = data;
                this.isAdd = isAdd;
            }
        },
        watch: { // Следим за именениями в переменных 
            data: function(data) {
                this.data = data;
            },
            isAdd: function(isAdd) {
                this.isAdd = isAdd;
            },
            $route: {
                immediate: true,
                handler(to) {
                    this.routeData = to.params.data;
                }
            }
        },
        created() { // Заполнение таблицы списком контактов
            this.data = this.dataArr;
        },
        mounted() { // Получение нового списка контактов при внесении изменения в пользователя
            if(this.routeData) {
                this.data = this.routeData;
            }
        }
    }
</script>