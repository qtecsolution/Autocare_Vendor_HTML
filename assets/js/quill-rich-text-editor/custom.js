// Include undo and redo functionality
class UndoRedo {
  constructor(quill) {
    this.quill = quill;
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);

    let toolbar = this.quill.getModule("toolbar");
    toolbar.addHandler("undo", this.undo);
    toolbar.addHandler("redo", this.redo);
  }

  undo() {
    this.quill.history.undo();
  }

  redo() {
    this.quill.history.redo();
  }
}

Quill.register("modules/undoRedo", UndoRedo);

var quill = new Quill("#editor", {
  modules: {
    toolbar: {
      container: "#toolbar",
      handlers: {
        undo: function () {
          quill.history.undo();
        },
        redo: function () {
          quill.history.redo();
        },
      },
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true,
    },
    undoRedo: true,
  },
  placeholder: "Write here",
  theme: "snow",
});

var quill = new Quill("#editor1", {
  modules: {
    toolbar: {
      container: "#toolbar1",
      handlers: {
        undo: function () {
          quill.history.undo();
        },
        redo: function () {
          quill.history.redo();
        },
      },
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true,
    },
    undoRedo: true,
  },
  placeholder: "Write here",
  theme: "snow",
});

var quill = new Quill("#editor2", {
  modules: {
    toolbar: {
      container: "#toolbar2",
      handlers: {
        undo: function () {
          quill.history.undo();
        },
        redo: function () {
          quill.history.redo();
        },
      },
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true,
    },
    undoRedo: true,
  },
  placeholder: "Write here",
  theme: "snow",
});

var quill = new Quill("#editor3", {
  modules: {
    toolbar: {
      container: "#toolbar3",
      handlers: {
        undo: function () {
          quill.history.undo();
        },
        redo: function () {
          quill.history.redo();
        },
      },
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true,
    },
    undoRedo: true,
  },
  placeholder: "Write here",
  theme: "snow",
});
