
    const sidebar = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('collapse-btn');

    function setCollapsed(collapsed) {
      if (collapsed) {
        sidebar.classList.add('collapsed');
        collapseBtn.setAttribute('aria-expanded', 'false');
        collapseBtn.setAttribute('data-tooltip', 'Expand');
        collapseBtn.querySelector('i').classList.remove('bi-arrow-left');
        collapseBtn.querySelector('i').classList.add('bi-arrow-right');
        collapseBtn.querySelector('span').textContent = 'Expand';
      } else {
        sidebar.classList.remove('collapsed');
        collapseBtn.setAttribute('aria-expanded', 'true');
        collapseBtn.setAttribute('data-tooltip', 'Collapse');
        collapseBtn.querySelector('i').classList.remove('bi-arrow-right');
        collapseBtn.querySelector('i').classList.add('bi-arrow-left');
        collpseBtn.querySelector('span').textContent = 'Collapse';
      }
    }

    collapseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isCollapsed = sidebar.classList.contains('collapsed');
      setCollapsed(!isCollapsed);
    });

    // Initialize state (expanded)
    setCollapsed(false);
  
      const reportTable = document.getElementById('report-table');
const reportThead = document.getElementById('report-thead');
const reportTbody = document.getElementById('report-tbody');
const downloadBtn = document.getElementById('downloadBtn');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const reportRadios = document.querySelectorAll('input[name="reportType"]');

function updateDownloadButtonState() {
  downloadBtn.disabled = !(startDateInput.value && endDateInput.value);
}

startDateInput.addEventListener('change', updateDownloadButtonState);
endDateInput.addEventListener('change', updateDownloadButtonState);

function updateReportTable() {
  const selected = document.querySelector('input[name="reportType"]:checked').value;
  if (selected === 'barangMasuk') {
    reportThead.innerHTML = `
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock Sebelum</th>
        <th>Stock Sesudah</th>
      </tr>`;
    reportTbody.innerHTML = `
      <tr><td>P001</td><td>Milk</td><td>Dairy</td><td>Rp. 12.000</td><td>200</td><td>250</td></tr>
      <tr><td>P002</td><td>Bread</td><td>Bakery</td><td>Rp. 8.000</td><td>150</td><td>180</td></tr>
      <tr><td>P003</td><td>Yogurt</td><td>Dairy</td><td>Rp. 10.000</td><td>100</td><td>130</td></tr>
      <tr><td>P004</td><td>Cookies</td><td>Snacks</td><td>Rp. 15.000</td><td>300</td><td>350</td></tr>
      <tr><td>P005</td><td>Soda</td><td>Beverages</td><td>Rp. 7.000</td><td>400</td><td>450</td></tr>`;
  } else {
    reportThead.innerHTML = `
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity Sold</th>
        <th>Current Stock</th>
      </tr>`;
    reportTbody.innerHTML = `
      <tr><td>P001</td><td>Milk</td><td>Dairy</td><td>Rp. 12.000</td><td>150</td><td>50</td></tr>
      <tr><td>P002</td><td>Bread</td><td>Bakery</td><td>Rp. 8.000</td><td>100</td><td>30</td></tr>
      <tr><td>P003</td><td>Yogurt</td><td>Dairy</td><td>Rp. 10.000</td><td>120</td><td>40</td></tr>
      <tr><td>P004</td><td>Cookies</td><td>Snacks</td><td>Rp. 15.000</td><td>200</td><td>60</td></tr>
      <tr><td>P005</td><td>Soda</td><td>Beverages</td><td>Rp. 7.000</td><td>180</td><td>70</td></tr>`;
  }
  }

  reportRadios.forEach(radio => {
    radio.addEventListener('change', updateReportTable);
  });

  // Init state
  updateReportTable();
  updateDownloadButtonState();

      document.querySelectorAll('.password-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const input = toggle.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      toggle.classList.remove('bi-eye-slash');
      toggle.classList.add('bi-eye');
      toggle.title = 'Sembunyikan password';
      toggle.setAttribute('aria-label', 'Hide password');
    } else {
      input.type = 'password';
      toggle.classList.remove('bi-eye');
      toggle.classList.add('bi-eye-slash');
      toggle.title = 'Tampilkan password';
      toggle.setAttribute('aria-label', 'Show password');
    }
  });
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });
});