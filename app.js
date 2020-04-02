new Vue({
  el: '#app',
  data: {
    levels: [
      'internship',
      'Junior',
      'Senior',
      'Manager',
      'CEO',
      'Director',
      'Executive',
      'Associate',
    ],
    open: false,
    openAmount: 2,
    allActive: false,
    zoomed: false,
  },
  methods: {
    toggleLevels() {
      this.open = !this.open;
      this.openAmount = this.open ? this.levels.length : 2;
    },
    toggleAll() {
      this.allActive = !this.allActive;
    },
    zoom() {
      this.zoomed = !this.zoomed;
      if (this.zoomed) {
        this.$el.style.transform = 'scale(1.2)';
      } else {
        this.$el.style.transform = 'scale(1)';
      }
    },
  },
  components: {
    level: {
      data() {
        return { active: false };
      },
      props: ['level', 'checked'],
      template: `<li
            class="level"
            v-bind:class="{ 'level-active': active ? active : checked }"
            @click="toggle"
          >
            {{ level }}
          </li>`,
      methods: {
        toggle() {
          this.active = !this.active;
        },
      },
    },
  },
});
