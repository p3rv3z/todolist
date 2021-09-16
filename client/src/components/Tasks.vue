<template>
    <panel title="Tasks">
        <div v-for="task in tasks" :key="task.id" class="mt-2">
            <v-row dense>
                <v-col cols="11 text-left">
                    <span v-if="!task.isEditMode">
                        {{ task.title }}
                    </span>
                    <v-text-field
                        v-if="task.isEditMode"
                        :value="task.title"
                        @keyup.enter="updateTask(task)"
                        @input="setTaskTitle({task, title: $event})"
                        dense
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="1">
                    <v-icon v-if="!task.isEditMode" @click="setEditMode(task)">edit</v-icon>
                    <v-icon v-if="task.isEditMode" @click="updateTask(task)">check</v-icon>
                    <v-icon v-if="task.isEditMode" @click="deleteTask(task)">delete</v-icon>
                </v-col>
            </v-row>
        </div>
        <div class="mt-5">
            <v-row dense>
                <v-col cols="11">
                    <v-text-field
                        dense
                        rounded
                        green
                        filled
                        placeholder="Add new task"
                        @input="setNewTaskTitle"
                        @keyup.enter="createTask"
                        :value="newTaskTitle"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="1">
                    <v-btn
                        small
                        filled
                        fab
                        color="green"
                        dark
                        @click="createTask"
                    >
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </panel>
</template>

<script>
import Panel from '../components/Panel.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    components: {
        Panel
    },

    computed: {
        ...mapGetters('tasks', [
            'newTaskTitle',
            'tasks'
        ])
    },

    methods: {
        ...mapMutations('tasks', [
            'setNewTaskTitle',
            'setEditMode',
            'unsetEditMode',
            'setTaskTitle',
        ]),

        ...mapActions('tasks', [
            'fetchTasks',
            'createTask',
            'updateTask',
            'deleteTask'
        ])
    },

    mounted() {
        this.fetchTasks()
    },
}
</script>

<style scoped>
</style>