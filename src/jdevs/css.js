import {StyleSheet} from 'react-native';

export const loginStyle = StyleSheet.create({

    TextInput: { backgroundColor: '#FFFFFF' },

    blankFlexView20percent: { flex: 2, padding: 0, margin: 0 },
    blankFlexView25percent: { flex: 2.5, padding: 0, margin: 0 },
    blankFlexView30percent: { flex: 3, padding: 0, margin: 0 },
    blankFlexView50percent: { flex: 5, padding: 0, margin: 0 },
    blankFlexView60percent: { flex: 6, padding: 0, margin: 0 },
    blankFlexView70percent: { flex: 7, padding: 0, margin: 0 },
    blankFlexView75percent: { flex: 7.5, padding: 0, margin: 0 },
    blankFlexView80percent: { flex: 8, padding: 0, margin: 0 },
    blankFlexView100percent: { flex: 1, padding: 0, margin: 0},

    safeAreaView: { flex: 1, backgroundColor: '#FFF' },
    loginFormView: { height: 180, justifyContent: 'center', alignItems: 'center' },
    loginTtlView: {
        backgroundColor: null
    },
    loginInputView: {
        flex: 1,
        width: 260
    },
    loginInputTrView: {
        flexDirection: 'row',
        marginTop: 6
    },
    loginInputThView: {
        flexDirection: 'column'
    },
    loginInputTdView: {
        flexDirection: 'column'
    },
    loginBtnView: {
        flex: 1,
        width: 240
    },
    loginTtlText: { paddingBottom: 8, width: 260, fontSize: 14, textAlign: 'center', color: '#3C3C3C', borderBottomWidth: 0.5, borderBottomColor: '#3C3C3C' },
    loginThText: { flex: 1, paddingTop: 4, paddingRight: 8, color: '#3C3C3C', fontSize: 13, textAlign: 'right' },
    loginTdText: { flex: 1, paddingTop: 4, paddingLeft: 8, color: '#3C3C3C', fontSize: 13, textAlign: 'left' }
});

export const commonStyle = StyleSheet.create({
    reset: { margin: 0, padding: 0 },
    textInput: { paddingLeft: 4, paddingRight: 4, width: 184, color: '#555', borderWidth: 0.7, borderColor: '#BEBEBE', borderRadius: 4 },
    fillButton: { fontWeight: '300' }
});
