import { reactive } from 'vue';

export const store = reactive({
  value: "",
  status: "Create",
  findId: "",
  listText: [
    { id: 0, name: "Joe" },
    { id: 1, name: "Jane" },
    { id: 2, name: "Mary" },
  ],
  handleAdd(value) {
    this.listText = [
      ...this.listText,
      { id: this.listText.length++, name: value },
    ];
    this.value = "";
  },
  handleDelete(id) {
    const newList = this.listText.filter((text) => text.id !== id);
    this.listText = [...newList];
  },
  handleUpdate(id) {
    this.status = "Update";
    this.findId = id;
    const itemUpdate = this.listText.filter((text) => text.id === id);
    if (this.value === "") {
      this.value = itemUpdate[0].name;
    }
    if (this.value !== itemUpdate[0].name) {
      itemUpdate[0].name = this.value;
      this.value = "";
      this.status = "Create";
    }
  },
  onEnter() {
    if (this.status === "Update") {
      this.handleUpdate(this.findId);
    } else if (this.value !== "") {
      this.handleAdd(this.value);
    }
  },
})
