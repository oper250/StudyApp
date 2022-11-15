import React, {Component, useEffect, useRef} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {loginStyle,commonStyle} from "./css.js";

function JDevsMain() {

    const idInput = useRef();
    const pwdInput = useRef();

    let inputValues = {
        loginId : '',
        loginPwd : ''
    }

    useEffect(() => {
        console.log('abc')
        idInput.current.focus()
    });

    const doLogin = () => {
        // console.log( 'doLogin', JSON.stringify( idInput ) )
        pwdInput.current.value = 'ccc'
    }

    return (
        <SafeAreaView style={loginStyle.safeAreaView}>
            {/* blank view */}
            <View style={loginStyle.blankFlexView30percent}></View>

            {/* login-form */}
            <View style={loginStyle.loginFormView}>

                {/* login-title */}
                <View style={[loginStyle.loginTtlView,loginStyle.blankFlexView20percent]}>
                    <Text style={loginStyle.loginTtlText}>로그인</Text>
                </View>

                {/* login-input */}
                <View style={[loginStyle.loginInputView,loginStyle.blankFlexView60percent]}>

                    {/* login-input tr 1 : 아이디 */}
                    <View style={[loginStyle.loginInputTrView,loginStyle.blankFlexView50percent]}>

                        {/* login-input th */}
                        <View style={[loginStyle.loginInputThView,loginStyle.blankFlexView25percent]}>
                            <Text style={loginStyle.loginThText}>아이디</Text>
                        </View>
                        <View style={[loginStyle.loginInputTdView,loginStyle.blankFlexView75percent]}>
                            <TextInput ref={idInput} style={[commonStyle.reset,commonStyle.textInput]} selectionColor={'#777'} maxLength={16} onChangeText={( text )=>{ inputValues.loginId = text }}></TextInput>
                        </View>
                    </View>

                    {/* login-input tr 2 : 비밀번호 */}
                    <View style={[loginStyle.loginInputTrView,loginStyle.blankFlexView50percent]}>

                        {/* login-input th */}
                        <View style={[loginStyle.loginInputThView,loginStyle.blankFlexView25percent]}>
                            <Text style={loginStyle.loginThText}>비밀번호</Text>
                        </View>
                        <View style={[loginStyle.loginInputTdView,loginStyle.blankFlexView75percent]}>
                            <TextInput ref={pwdInput} style={[commonStyle.reset,commonStyle.textInput]} selectionColor={'#777'} secureTextEntry={true} maxLength={20} onChangeText={( text )=>{ inputValues.loginPwd = text }}></TextInput>
                        </View>
                    </View>
                </View>

                {/* login-input tr 2 : 비밀번호 */}
                <View style={[loginStyle.loginBtnView,loginStyle.blankFlexView20percent]}>
                    <Button style={[commonStyle.fillButton]} title={'로그인'} onPress={()=>{doLogin()}}/>
                </View>
            </View>

            {/* blank view */}
            <View style={loginStyle.blankFlexView30percent}></View>
        </SafeAreaView>
    );
}

export default JDevsMain;
