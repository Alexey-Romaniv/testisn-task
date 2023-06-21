import {NavLink} from "react-router-dom";
import {login} from "../../redux/auth/authOperations";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styled";
import sprite from '../../assets/icons/InlineSprite.svg';
import logo from '../../assets/icons/logo.svg';
import {
    AuthBackground,
    AuthWrapper,

    FormWrapper,
    Input,
    InputWrapper,
    Svg
} from "../CommonComponents/AuthForm.styles";
import {Container} from "../CommonComponents/Container.styles";
import {LogoImg, LogoText} from "../CommonComponents/Logo.styles";
import {useAppDispatch} from "../../utils/hook";
import React, {FormEvent, useState} from "react";

export const LoginForm: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit =  (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {email, password}
        dispatch(login(userData))
        setEmail('');
        setPassword('');
    }


    return (<AuthBackground>
        <Container>
            <AuthWrapper>
                <LogoText><LogoImg src={logo}></LogoImg>Wallet</LogoText>
                <FormWrapper onSubmit={(e) => handleSubmit(e)}>
                    <InputWrapper>
                        <Input type="email" name="email" value={email}
                               onInput={(event) => setEmail(event.currentTarget.value)}
                               placeholder="Email"/>
                        <Svg>
                            <use xlinkHref={`${sprite}#src-3`}></use>
                        </Svg>
                    </InputWrapper>
                    <InputWrapper>
                        <Input type="password" name="password" value={password}
                               onInput={(event) => setPassword(event.currentTarget.value)}
                               placeholder="Password"/>
                        <Svg>
                            <use xlinkHref={`${sprite}#src-2`}></use>
                        </Svg>
                    </InputWrapper>
                    <MainBtn type="submit">
                        Login
                    </MainBtn>
                </FormWrapper>
                <NavLink to='/register'>
                    <SecondBtn>Register</SecondBtn>
                </NavLink>
            </AuthWrapper>
        </Container>
    </AuthBackground>)
}