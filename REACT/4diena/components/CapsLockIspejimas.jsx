const CapsLockIspejimas = () => {
    const arCpasLock = (event) => {
        if (event.getModifierState('CapsLock')) {
            alert('Caps Lock yra įjungtas');
        } 
    }
    return (
    <div>
          <h2>CapsLockIspejimas</h2>
          <input type="password" onKeyDown={arCpasLock}/>
    </div>
  );
};

export default CapsLockIspejimas;
