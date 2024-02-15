import "./signin.css";

function Signin(){
    return <> 
    <div className="acesso">
        <div className="box-login">
            <h1 className="titulo-login text-center">Login</h1>
            <input type="text" name="login" id="login" />
        </div>

        <div className="box-senha" >
            <h1 className="titulo-senha text-center">Senha</h1>
            <input type="text" name="login" id="login"  />
        </div>
    </div>

    <div className="confirmacao">
        <button className="button-acesso">Acessar</button>
    </div>
    </>
}

export default Signin;