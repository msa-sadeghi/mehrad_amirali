function LoginForm() {
    return (
        <form action="" className="login-form">
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-input"
                />
            </div>
            <button type="submit" className="submit-btn">Login</button>
        </form>
    )
}

export default LoginForm;