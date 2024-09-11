export function createWrapper(element){
  const wrapper = document.createElement('div');
  const title = document.createElement('h1');
  title.classList = 'title';
  title.innerText = 'Виртуальная клавиатура';
  wrapper.append(title);
  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  textarea.id = 'textarea';
  textarea.setAttribute('autofocus', 'autofocus');
  wrapper.append(textarea);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard__wrapper');
  wrapper.append(keyboard);
  const langInfo = document.createElement('div');
  langInfo.className = 'lang-info';
  const text = document.createElement('p');
  text.innerText = 'Клавиатура выполнена под Windows.';
  langInfo.append(text);
  const text2 = document.createElement('p');
  text2.innerText = 'Для переключения языка использовать комбинацию Ctrl + Alt.';
  langInfo.append(text2);
  wrapper.append(langInfo);
  element.append(wrapper);
}
