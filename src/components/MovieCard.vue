<template>
    <div>
        <b-col >
            <b-card
                    :title="title"
                    :img-src="poster"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 15rem;"
                    class="mb-2"
            >
            </b-card>
        </b-col>
    </div>
</template>

<script>
    export default {
        props: ["title", "poster", "type", "year"],

    };
</script>


