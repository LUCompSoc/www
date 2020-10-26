<template>
  <div class="events-calendar text-start">
    <v-calendar
      v-model="value"
      :weekdays="[1, 2, 3, 4, 5, 6, 0]"
      type="month"
      mode="stack"
      :events="events"
      :event-color="getEventColor"
      @change="getEvents"
    >
      <template v-slot:event="{ event, eventParsed }">
        <strong>
          {{ eventParsed.start.time }} - {{ eventParsed.end.time }}
        </strong>
        {{ event.name }}
      </template>
    </v-calendar>
  </div>
</template>

<script>
export default {
  name: 'events-calendar',
  data: () => ({
    value: '',
    events: [],
  }),
  methods: {
    getEvents({ start, end }) {
      // TODO: load events from iCal
      const events = []

      events.push({
        name: 'Meet the Exec (and Among Us)',
        start: '2020-10-06 18:00',
        end: '2020-10-06 22:00',
        color: 'red',
      })

      events.push({
        name: 'Linux 101: Installation and CLI',
        start: '2020-10-22 18:00',
        end: '2020-10-22 20:00',
        color: 'purple',
      })

      events.push({
        name: 'Internet Cafe - Study Session',
        start: '2020-10-23 18:00',
        end: '2020-10-23 19:00',
        color: 'blue',
      })

      events.push({
        name: 'Internet Cafe - Study Session',
        start: '2020-10-30 18:00',
        end: '2020-10-30 19:00',
        color: 'blue',
      })

      // FIXME: not visible until November, need to be able to change month
      events.push({
        name: 'App Development 101',
        start: '2020-11-05 18:00',
        end: '2020-11-05 20:00',
        color: 'purple',
      })

      this.events = events
    },
    getEventColor(event) {
      return event.color + ' accent-3'
    },
  },
}
</script>

<style lang="scss">
.events-calendar {
  height: 600px;

  .v-calendar {
    .v-event {
      height: 60px !important;
      white-space: normal;
    }
  }
}
</style>
