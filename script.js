function guessNumber() {
      const input = document.getElementById('number');
      const value = parseInt(input.value);

      if (isNaN(value) || value < 1 || value > 10) {
        document.getElementById('result').innerHTML = 'Please enter a number between 1 and 10';
        return;
      }

      document.getElementById('result').innerHTML = 'Loading...';

      setTimeout(() => {
        document.getElementById('result').innerHTML = `You are thinking of number ${value}`;
      }, 5000);
    }