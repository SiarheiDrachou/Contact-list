<template>
    <table class="table" cellspacing="2px">
        <thead class="thead">
            <tr>
                <p title="Добавление нового контакта">
                    <svg 
                        width="1em" 
                        height="1em" 
                        viewBox="0 0 16 16" 
                        class="bi bi-plus" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                        @click="create"
                    >
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </p>
            </tr>
            <tr>
                <th
                    scope="col"
                    v-for="(items, id) of tableHead"
                    :key="id"
                >
                    {{id}}
                </th>
                <th>
                </th>
            </tr>
        </thead>
        
        <tbody class="tbody">
            <tr 
                v-for="(items, id) in data"
                :key="id"
            > 
                <td 
                    v-for="(item, key) in items"
                    :key="key"
                >
                    <router-link :to="{name: 'ContactInfo', params: { data: data, id: id }}" title="Переход к второй странице с данными этого пользователя"> {{ item }} </router-link>
                </td>

                <td>
                    <p title="Удаление контакта">
                        <svg 
                            width="1em" 
                            height="1em" 
                            viewBox="0 0 16 16" 
                            class="bi bi-trash" 
                            fill="currentColor" 
                            xmlns="http://www.w3.org/2000/svg"
                            @click="remove(id)"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data: function() {
            return {
                isAdd: false,
                tableHead: null,
            }
        },
        props: [
            'data',
            'routeData'
        ],
        methods: {
            create() { // Показываем поля для ввода данных нового пользователя
                this.isAdd = true;
                this.$emit('create', this.isAdd);
            },
            remove(id) { // Метод для удаления пользователя из таблицы контактов
                if (confirm("Удалить пользователя")) {
                    this.data.splice(id, 1);
                } else {
                    alert("Вы нажали кнопку отмена")
                }
            }
        },
        watch: {
            data: function(data) {
                this.data = data;
            },
            tableHead: function(tableHead) {
                this.tableHead = tableHead;
            }
        },
        created() { // Заполнение шапки таблицы списком полей контактов
            if(this.routeData) { // Если добавили новые  поля то заполняем шапку таблицы отсюда
                this.tableHead = this.routeData[0];
            }
            else { // Заполняем шапку таблицы при первичной отрисовке
                this.tableHead = this.data[0];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .table {
        width: 95%;
        margin: 50px auto;
    }

    th, td {
        border: 1px solid black;
    }
    td {
        padding: 5px 10px;
    }
    a {
        color: black;
    }
    svg {
        width: 20px;
        height: 20px;
    }
</style>