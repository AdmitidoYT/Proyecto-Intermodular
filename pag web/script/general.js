function showSection(id) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            document.getElementById(id).classList.add('active');
            event.target.classList.add('active');
        }

        document.addEventListener("DOMContentLoaded", function () {
      document.body.classList.add("loaded");
    });

    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.href;

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      document.body.classList.add("loaded");
    });

    function handleTransition(url) {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = url;
      }, 400);
    }

    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (e) {
        if (this.href) {
          e.preventDefault();
          handleTransition(this.href);
        }
      });
    });

    document.querySelectorAll("button[data-link]").forEach((button) => {
      button.addEventListener("click", function () {
        handleTransition(this.dataset.link);
      });
    });