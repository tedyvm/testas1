const SlaptazodzioRodymas = () => {
    const pakeisk = () => {
        const input = document.querySelector('#psw');

        const checkbox = document.querySelector('#checkbox');
        if (checkbox.checked) {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
  }
    return (
    <div>
          <h2>SlaptazodzioRodymas</h2>
          <input type="password" id="psw"/>
          <input type="checkbox" onChange={pakeisk} id="checkbox"/>
    </div>
  );
};

export default SlaptazodzioRodymas;
