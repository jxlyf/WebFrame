<template>
    <div>
        <Row class="expand-row">
            <i-col span="8">
                <span class="expand-key">Job: </span>
                <span class="expand-value">{{ row.job }}</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Interest: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Birthday: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </i-col>
        </Row>
        <Row>
            <i-col span="8">
                <span class="expand-key">Favorite book: </span>
                <span class="expand-value">《{{ row.book }}》</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Favorite movie: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Favorite music: </span>
                <span class="expand-value">{{ row.music }}</span>
            </i-col>
        </Row>
    </div>
</template>

<script>
    export default {
        props: {
            row: Object
        },
        name: "table-expand"
    }
</script>

<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>