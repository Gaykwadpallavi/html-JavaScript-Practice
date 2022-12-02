function change(param)
        {
            let image = document.getElementById(`${param}`);
            let big = document.getElementById('b');
            let temp =  document.getElementById(`${param}`).src;
            image.src = big.src;
            big.src = temp;
        }