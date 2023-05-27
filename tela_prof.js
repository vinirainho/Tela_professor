function registrarPresenca() {
  // Lógica para registrar a presença do aluno
  console.log("Presença registrada.");
}

function registrarIntervalo() {
  // Lógica para registrar o intervalo
  console.log("Intervalo registrado.");
}

function verDados() {
  // Lógica para exibir os dados
  console.log("Exibindo dados.");
}
document.addEventListener('DOMContentLoaded', function() {
  var calendarContainer = document.querySelector('.calendar-container');
  var calendarBtn = document.querySelector('.calendar-btn');
  var calendarBody = document.querySelector('.calendar-body');
  var currentMonth = document.querySelector('.current-month');
  var prevMonthBtn = document.querySelector('.prev-month');
  var nextMonthBtn = document.querySelector('.next-month');

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonthIndex = currentDate.getMonth();
  var currentDay = currentDate.getDate();

  calendarBtn.addEventListener('click', function() {
    calendarContainer.classList.toggle('show-calendar');
  });

  prevMonthBtn.addEventListener('click', function() {
    currentMonthIndex--;
    renderCalendar(currentYear, currentMonthIndex);
  });

  nextMonthBtn.addEventListener('click', function() {
    currentMonthIndex++;
    renderCalendar(currentYear, currentMonthIndex);
  });

  renderCalendar(currentYear, currentMonthIndex);

  function renderCalendar(year, month) {
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var prevMonthDays = new Date(year, month, 0).getDate();

    calendarBody.innerHTML = '';
    currentMonth.textContent = getMonthName(month) + ' ' + year;

    // Render previous month days
    for (var i = firstDay - 1; i >= 0; i--) {
      var dayCell = document.createElement('td');
      dayCell.textContent = prevMonthDays - i;
      dayCell.classList.add('disabled');
      calendarBody.appendChild(dayCell);
    }

    // Render current month days
    for (var i = 1; i <= daysInMonth; i++) {
      var dayCell = document.createElement('td');
      dayCell.textContent = i;
      if (year === currentYear && month === currentMonthIndex && i === currentDay) {
        dayCell.classList.add('current-day');
      }
      calendarBody.appendChild(dayCell);
    }

    // Adjust table rows
    var rows = calendarBody.querySelectorAll('tr');
    if (rows.length > 5) {
      calendarBody.classList.add('extra-rows');
    } else {
      calendarBody.classList.remove('extra-rows');
    }
  }

  function getMonthName(monthIndex) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthIndex];
  }
  function registrarPresenca() {
    // Lógica para registrar a presença do aluno
    console.log("Presença registrada.");
  }

  function registrarIntervalo() {
    // Lógica para registrar o intervalo
    console.log("Intervalo registrado.");
  }

  function verDados() {
    // Lógica para exibir os dados
    console.log("Exibindo dados.");
  }

  function gerarCalendario() {
    var calendario = document.querySelector('.tabela-calendario');

    var dataAtual = new Date();
    var mesAtual = dataAtual.getMonth();
    var anoAtual = dataAtual.getFullYear();

    var diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

    var cabecalho = document.createElement('thead');
    var linhaCabecalho = document.createElement('tr');
    linhaCabecalho.innerHTML = '<th colspan="7">' + getNomeMes(mesAtual) + ' ' + anoAtual + '</th>';
    cabecalho.appendChild(linhaCabecalho);

    var diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    var cabecalhoDiasSemana = document.createElement('tr');

    for (var i = 0; i < diasSemana.length; i++) {
      var diaSemana = document.createElement('th');
      diaSemana.textContent = diasSemana[i];
      cabecalhoDiasSemana.appendChild(diaSemana);
    }

    cabecalho.appendChild(cabecalhoDiasSemana);
    calendario.appendChild(cabecalho);

    var corpoTabela = document.createElement('tbody');
    var diaAtual = 1;

    for (var i = 0; i < 6; i++) {
      var linha = document.createElement('tr');

      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < new Date(anoAtual, mesAtual).getDay()) {
          var celula = document.createElement('td');
          linha.appendChild(celula);
        } else if (diaAtual <= diasNoMes) {
          var celula = document.createElement('td');
          celula.textContent = diaAtual;
          linha.appendChild(celula);
          diaAtual++;
        }
      }

      corpoTabela.appendChild(linha);
    }

    calendario.appendChild(corpoTabela);
  }

  function getNomeMes(mes) {
    var nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return nomesMeses[mes];
  }

  gerarCalendario();
});
