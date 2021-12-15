export default function dragging() {
  let inp = document.querySelectorAll('.d-drag');
  let tag = document.querySelector('.d-wrap');
  let ans = document.querySelectorAll('.d-item-drag');

  //
  function allowDrop(ev) {
    ev.preventDefault();

    if (ev.target !== ev.currentTarget) {
      ev.target.parentElement.classList.add('highlight');
    } else {
      ev.target.classList.add('highlight');
    }
  }

  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    ev.target.classList.add('dragging');
    tag.classList.add('highlight');
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    ev.target.classList.remove('highlight');
  }
  function replace(ev) {
    ev.preventDefault();
    ev.target.classList.remove('highlight');
    if (ev.target.childNodes.length > 1) {
      let oldData = ev.target.querySelector('.d-item-drag');
      tag.appendChild(oldData);
    }
    var newData = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(newData));
    ev.target.classList.add('active');
  }

  function reset(ev) {
    ev.target.classList.remove('highlight');
  }
  function check(ev) {
    tag.classList.remove('highlight');
    setTimeout(() => {
      ev.target.classList.remove('dragging');
    }, 100);
    inp.forEach((el) => {
      let key = el.querySelector('input');
      el.classList.remove('highlight');
      if (el.childNodes.length > 1) {
        key.value = el.querySelector('.d-item-drag').getAttribute('data-ans');
        $(key).trigger('change');
      } else {
        el.classList.remove('active');
        key.value = '';
        $(key).trigger('change');
      }
    });
  }
  //
  if (tag) {
    tag.addEventListener('dragover', allowDrop);
    tag.addEventListener('drop', function (ev) {
      drop(ev);
      check(ev);
    });
    //
    inp.forEach((el) => {
      el.addEventListener('dragover', allowDrop);
      el.addEventListener('drop', replace);
      el.addEventListener('dragleave', reset);
    });
    //
    ans.forEach((el) => {
      el.addEventListener('dragstart', drag);
      el.addEventListener('dragend', function (ev) {
        check(ev);
      });
    });
  }
}
