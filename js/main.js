const inputs = document.querySelectorAll('.controls input');     // declaro $ valores

function handleUpdate() {

  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);   // 
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); //Declarar evento 

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //Declarar evento