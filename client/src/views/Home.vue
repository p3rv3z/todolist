<template>
    <v-container>
        <v-layout justify-center>
            <v-flex xs12 lg6>
                <tasks></tasks>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Tasks from '../components/Tasks.vue'
export default {

    components: {
        Tasks
    },

}
</script>
