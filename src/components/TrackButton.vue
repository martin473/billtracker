//need to change the track bill import to this file from helloworld.vue
trackBill(bill.bill_id)
<template>
    <v-btn color="primary" variant="outlined" @click="track">{{
        buttonText
    }}</v-btn>
</template>

<script>
export default {
    props: ['billId'],
    data: () => ({ buttonText: 'Track' }),
    methods: {
        track: function () {
            this.buttonText == 'Track'
                ? (this.buttonText = 'Tracked')
                : (this.buttonText = 'Track');
            alert('Placeholder function for button: ' + this.billId);
        },
    },
};
</script>
