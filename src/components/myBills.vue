<template>
    <v-text-field
        v-model="keywords"
        :loading="loading"
        density="compact"
        clearable
        label="Keyword"
        variant="outlined"
        hint="Keywords are words that might be in the bill"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        @keydown.enter.prevent="bills = showBills(keywords)"
    ></v-text-field>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">TRACK</th>
                <th class="text-left">BILL ID</th>
                <th class="text-left">BILL NUMBER</th>
                <th class="text-left">TITLE</th>
                <th class="text-left">LAST ACTION</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="bill in bills" v-bind:key="bill.bill_id">
                <td>
                    <track-button :bill-id="bill.bill_id" />
                </td>
                <td>{{ bill.bill_id }}</td>
                <td>{{ bill.bill_number }}</td>
                <td>
                    <a :href="bill.text_url">{{ bill.title }}</a>
                </td>
                <td>{{ bill.last_action }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import { showBills } from '../scripts/legiscanSearch.js';
import TrackButton from './TrackButton.vue';
export default {
    data: () => ({ bills: [], trackedButtons: {} }),
    methods: {
        async showBills() {
            this.bills = await showBills(this.keywords);

            for (var bill = 0; bill < this.bills.kength; bill++) {
                this.makeTrackButton(this.bills[bill].bill_id);
            }
        },
        trackBill(id) {
            this.trackedButtons[id]['isTracked'] =
                !this.trackedButtons[id]['isTracked'];
            this.trackedBtnText[id]['text'] = this.trackedButtons[id][
                'isTracked'
            ]
                ? 'Tracked'
                : 'Track';
        },
        makeTrackButton(id) {
            this.trackedButtons.put(id, { isTracked: false, text: 'Track' });
        },
    },
    components: {
        TrackButton,
    },
};
</script>
