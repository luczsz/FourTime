import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #F5F5F8FE;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
`;

export const Header = styled.View`
    background-color: #131313;
    margin-top: 30px;
    height: 90px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding-start: 12px;
    padding-end: 12px;
    justify-content: center;
    //align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    //background-color: #DDD;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    background-color: rgba(0,0,0,0.20);
    margin-bottom: 10px;
    height: 60px;
    width: 90%;
    padding: 14px;
    border-radius: 15px;
`;

export const Submit = styled.TouchableOpacity`
    background-color: #131313;
    width: 80%;
    height: 60px;
    border-radius: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
`;
export const Cadst = styled.TouchableOpacity`
    margin-top: 12px;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
`;
export const SubmitText = styled.Text`
    color: #D9D9D9;
    font-size: 18px;
    font-weight: bold;
`;
