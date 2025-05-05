const form = document.getElementById('formRegex');
    const fields = {
      nome: { el: nome, msg: nomeMsg, regex:/^[A-Za-z\s]+$/ },
      email:{ el: email, msg: emailMsg, regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      cpf:  { el: cpf,   msg: cpfMsg,   regex:/^\d{3}\.\d{3}\.\d{3}-\d{2}$/ }
    };

    form.addEventListener('submit', e => {
      e.preventDefault();
      let okAll = true;
      for (let f of Object.values(fields)) {
        const ok = f.regex.test(f.el.value);
        f.el.classList.toggle('is-valid', ok);
        f.el.classList.toggle('is-invalid', !ok);
        f.msg.textContent = ok ? 'Válido ✅' : 'Inválido ❌';
        f.msg.classList.toggle('text-success', ok);
        f.msg.classList.toggle('text-danger', !ok);
        if (!ok) okAll = false;
      }
      if (okAll) form.reset();
    });