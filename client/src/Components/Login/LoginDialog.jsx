import React, { useState, useEffect } from 'react';

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';

import { authenticateLogin, authenticateSignup } from '../../service/api';

const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FFFFFF;
    border:1.5px solid black;
    color: #000000;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #000000;
    height: 48px;
    border:1.5px  black;
    border-radius: 2px;
    box-shadow: 0 8px 10px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 5px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
// height: 70vh;
    
const Image = styled(Box)`
    background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAACB1BMVEX////UI0DwmUxaSHI0JknqQltUQ23HdC797OSjFzL4t5FryOnwl0hAMlY8LlLOyuHBIzHzrXpYS3aJL0/yqm785tnbLkkmJkkvH0UTADPOKkL+8evFIS3XI0DrTmbypGRfQGfkfkX63cmtIkLMfj/vkzzFbhyaVyteVW2jJEM7JUnPilOSFCK5JELkOlR/RR4gCDrSAC1INGTbUGV/Tj/u7fXTUGe8cTjumXCYYkuDPmRFMGIoFj7piUiqYSe3scD51LlsW4fpME7eckLlkkre2+LIzNNwcZKVl63RACcAAADykF/2xaDubn9iUIKRAAqHe5edABq3JEKpo7yqNFbmjZjhdIIAABv3zr3c8/70rba9ABrogFedAB/vucDMMUrlwLmUiqK1UWH74+b4y9F/eYq3ssrDwNdoX3vSAAywAywrESZaNTnhlHbEeGSaWFBpLDdXEipqDip4BiaHbHQoIzAAACDdpITDiW15WE1MOjtQUFk/OkXyqoQ8KzOYl5u6inMAACOXcGC95veQ1/HC6fmSucfwiJawsrPZUkzDq5/RppLjd2G8AA3SQ0Xat8BYIkauf4C4oKtpTknSkZuzNzpws9SMb4nih2pGdZTlzM3aZWWTXD3ZkanDg1WUSQ0iHFCpQzm0YnZnM17BdH+lYHvBRGOpRGaHRmvWo6o2CDpuJUfVq8J8UM33AAAV5klEQVR4nO2di1vbVprGZXwpdmPM1YCNkoxDO5AEry0qwhbvGjz4QoHUxDUJEEyNCVDvZnanM7ukO2WSJukw3U1LpkM2Hdppsw3TbbbzR+65STqyJSHLsp0nj95pGtcjH5+f3u985ybJDGPJkiVLlixZsmTJkiVLlixZsmTJkiVLlixZaoFKwVbXoKHaWmajUf9qq6vRMG2NR9no+EQ0yuZfSSNLgM/G5hmmELVFowevHmMe8Nls0RJ4GQUv2OirFqsTEAsQAq4Sfjn3aiGuYioby+ZXbSx+6W91pUzVMqYqj7nL5XIA00ZbXSlThQjH3KIg5FyrK2Wq8qwt4JbpVSMsRMfcFXrFopS/XAnodo+3ulKmir9+/Z/++TbUL//lX3/1qw8//PDXv/5Nqytlrv7t+r/veTyefai9O/c/+o/r13/b6jqZq4+v3/cQIcr9313/uNV1Mle/vQ4svHMf+rh3/x7A/OhV8/DudY/n3r07iPDOPYB4/51bra6TuUq9s+eR6aN3Uq2uk6nq27t+D9onEf7u48lWV8pU3Zi/BTLN3icI7j5MOu+8P/9KTRFvzN/wIA9BFvXsASv373rmW10pU9U+7+kDbNN9wLe+6QXPvic472l1pcwVcKyPYVYePHz99YcPVpj24I359lbXyWTd4CGdoIeftr9qgAzzulwrra6P+XooJ2x1dRqglZeKMLi1ms+vbpVMLVRmYmuDtLCYSCTCYfCv8YKZ5VKIn5pZbq3aOptwOp3hsN/vB5Rnt0wsWkRs6ZA0D/n8NkH+RN68sm/8HgPuLZhXZs06SEC+sFNEtLEHphW+MP8HwPf7yckWDmeggzYbbaLNFjXLxYnPJudv/+d/TQINtWpJfwsCghZok2nOhLYY3Dr62haYJHoUsG21ZmZxFgI6w3JAE3YYSstra2u2QOAzQhgIBNY+/+LIjCrXpkLC6fc7nbZKRevsNAprQ52dnQCLmHgTvuzsXOs0t8PVoUVgn7wNEhPrW7wtfN5JAAOPAN/8pS8wYedQsxGDyEIKENQDAeKNTaPCgJhwA75RigZahLiVABZKjZBspZTLgUD50HipBBATonjP2wRCgNjUhLOakFkI6J5s/vT88UVHf38sabTQYwLY2fkEYoF4DyILL5fRm0NfmElwmlbDYJwmApbd7tv7+3t/fHqVmxqIRQwilkTA8uXLIBrmCkx+DgTFZULYOTRhLoSmgIdUHkWASHe+zMxMTRkpccHzswq9/37w/fcnZW91eaZNBlEVIKS6QvcTcZehz2iJvW+0yXWmr729Pdh7RvbeG00bpm4l6C7C/UuPsLppmPDcGR2EbWeaRhiUDWbctxHgHfDH6KJR4WdtughvmoqhpUW2mtCzt7dvMKMH1/5BF2HbL0ycoWmrwCpE6Z/+ZHSuszykl3CtaR3/WQrR/TVph/cMEm593qmXcKhpe/pb0cpcuu+ZDhlMNF906ibsXDN1QUhLeQlxzL0P+ECSWfnU0MJYYa0Gws5Os0lUdRAlgcqWl46DQWYFrR49NFBSaagGwqGm5RqGOYKXnbE2NuBeij8QthqMEAYfDeknbOro9NETMOSGVzCt/Xddy5t7k4/0E351w3QOVd24efPmZxCy/LSuJfg+MNf9TC/hV5OTzZtFzc8DxJv7tx8//rO0F2agnNtwuWJWH+E5cGjTRm435hHivud+LFbPJkPIs18L4b7H0xQTSyeHX80LiLHYn+uwEM9LKgHVCOHBTTFxc33d/eQRRrz5x8igcQunEeFCJYrKyLsXHW14BqNfh0NltDLzGUD8xQ2GTyUfPHz48PUHtZcUxAM+RifhOXJ4o1WC3SC+lvfm/H5dRWELgzUShkwCUdUGuYYedPbuR3WVFBSiTiehcJ2USSBqIjcMhJ3OsM29Xjquo6gQrO40o5twIYQTU4Mvz2ChhX4nks299m4dU7bpWglx6jW8lqBPBWShkyjgroewfZ/EnG7C6SZE6Ti0MCAQJo5P6ljmZhZwotFPuCC43jgF0e1WYyLhKlN3Q9SfaRYYaLrR5SCdwkHqdorSPvzuKcURS/QStjchSPOoq3CHKRM1xDt82sVN4xrXlEsb3B2izjDg3hA9DGse7vVp72OgXKOfcLoJvWEU76ddc+oz0es7xUSc/PUSLjR+5E3uenRLYaptIiBM8loHhFDY6SVswsC7IBBKYZrQWuADhDz4R/2AIEo1Ogm7DAVp6FyvoHNdQVBue+gcpUty5Vlhz1DKpmc1CQGdJuNCjXOL2hdqFt44I+ocJqTeOfOaTG9+zdqqTdS4jGYE/8WrI/bVSFh7Zzh9hiqBEFKlyglf+0JcBhZyTTic1zFM5IWEUyrkDxYXzy5LxDDV6Cc0kGdqI6R2fnGuSSz3BfUMhBFhYdEJr9f0+9kJyVTQA4R6zwxf+fbK8PDwt8PDs+Cv4Vk1QgN5xiBh2Q1HbomzW/AjOr4m6eNXw4lwGF/gQBOCLnEaEA5/A9C+eeutK8OzP/92dliNsHZA0A7f0E345ps22sSwczUYhPcLnN42QLLx/SUhXr9BE8IwBYTwf8Nts22z0EQlQpgnDA26g6HpK4K+xYSvXZH0c0rfhULjwrYamOCPHbQDvr79+XmtxhFagBb7oKQtORlhaL+rq6u3DRPOqhGe6wVHGZwZtn8nIHyDCb+jqP6O0ndk7iSY2B4M9u3Nz09O9qoX7gGV7yOEUWXCIKx7b1fv8Cxqgm3Dly4Nt4HWLRIC99q6sAwBMsfGCAPrJ4XNm4BvsqtrWu3kdd1/9uw+bDwAcFnFQ2YaIYLOt/ccdbUJ0CX8GvTUvdDC3i6D45m+14aJLpEoHZb0j7RkhCDZrLvdkE/13IZ6u55dvfrsDqDJL/qjLKtMyASnu3oh5e3Lot6FIq//ZxKZbHxS0SdkltMyzZtyQni5l/sRCR/PAtA0UCgU6oMCQQa82QeEA4OfDHrP/9QzemHMxioSQshQqJ1ZHupUUZ/RDeb6CNEle5NdcsFoIoL/+ZtnkWLq7khksB/pMatCiDShRrhWB149hOgBFk+6tNTL8BiF/77nMUQMaBF2Dilr7fNWEaI4DfUqkSEPPQtST7mVYNmx0QuaHpbOK+uwzotM6iAEcbrOtHvE2UkvapCwMfYFK4cBTrgXILTDceWhuEtRXL03ltRByAJCcH6DMLNUIVVoVcqk0UWVOWX3S0cI4nRJdwSFBQOXVQ+ZcdmRXibCwJLu9dJVYUdH/YqRNCG0y0C5eCsJ2fIL3V8ETAwEyu5R9SOyckIC2VpCG6v/fo+tTbSxuqS+D1B8KQnVW1WVSkvoCULqJmZeSkLtJWEZ4DjaVdUwMf4yEtbwGKcJvF7udm++qoRRnJqAiWr5N841h/DM7CycbKM/GoTwaoUAmC3o/Z7gHP6YhompJhEOf3Nl9so3V4aHwT/qhOzG2+fB1z/Xv0MqzPHVTWwW4exwG1zQQ+t6aoQs+x7qje3drplsPKW5NyFI+PCG2/298hHJphHCxaBZLQ/ZjeeIj1SC47qzmfhpNwQdkA/7x9TGehRht6mEggBhMBgMvTE7C5oi+NM2e0aRUDRQdrI5jtvVtLMghGnYvX6ieAQvErrSJhIy06KYP9wF+ntKb9GKY0JiYFVmJ3a6dotxRczSnO0UE3mxTFd2xkRCSanBGNCAmgbvnoWTvB6XCiBl57PYxWJV8X5WMlF5sCcRFncbQhgfFGkcDgf1Gv8dubUcjY6ePwUQy+uNVT2GTFxPBCauK04nRUAug0fhZhMyt0YExRziS++AF7+4xQfzpW5dgHaX11t1L6LYEFVN7BYJc0Upj5lJKGkk5hVfz9ipdhXn9ABCwljlzFVsiNBEt9K3zghYXLzhhHxEijKemwH/Tqbi8Uzx1i09fMqEjLQmHHYvKU0sdyXCXKMJmXhkUKxhnNv1DkYiEZSHHHoAlQmlhX1gotIkKisRxiXCRj3i5FYshoMzNRJx2b0OSV6jhKvS5kxYcRJFE3INJ2QcMbQNvzsIkqkcEaqjw4skJh7X1BTo9DmJcKCqZiWJ0L+hNP4uSoSpJhCmIhHQAnZjCMhud2grdpfheT6Z1CJkqHvewkrj75xEmGwCIZOJRJLJQWKZ3aVNGCH1IK0UuDtQnSGou0/DYwrj77jQCTaJEHQZIymyp9Lv7Xb1a4l0LsLQUpmQaoj+sEKHgRsfIuSbQpiMxEZ6LhC93f32BQ39cLC8nD+NkL4106lNyEw1nDAHKvjlKCvpvDDikOm5dEB0XJoAKROWaMJy9bAmRRE23MN4Oh3Ps/SqReBtJfVQ0/6aCMMKz4FIUoT2BhOm0tm/slR9QLsJixckhhOUtTYZYUo/ocKjs8T0Aqh2XQ0lBIATLI3nrFRY+Qk82oR0OwwvVn8tTxFmG0qYTD+1SYD+KjysSkZIGDeNsCgQThl+JIy6+PRfpeiT+MJItI+qhK5TewtlQpcCIWc+IQAUayLEJx2UVMzKbIR7GMKoRJkwTwVGWGnHwy4R5hroYYYCVGlz4UpE1FuUxM0VFcIJmhD0nqWtQqFAPzuTIhT7RvMJKcCwSk6hGNH/ydrGx8eXYU2LmoR0kDoXF+FzM6HCi6uEckYiFIfephNmnoonWjGfKCCyY7EM+XRWi1DW4csScyKxiC41nnGJVA0jjKc3WLoSKnw2KQX5bWxPvzBd1iSkHjYBz8/GxhjUxgaGXA4yYicIqJIN8/B7GrDyyYGKiDZ2tN8xgKfLZB0CzhwHMpVFb0jNEPBRv0NybQMxFsROEFDxjSIUI+lUQDFQw+xYv4Ms62gRSitR8ORck//YCmRMrBYlQnHoPaVrV0S/hK2J8OmAIqI/0O9wDKJTPWNXJ1ymLQxX/aAMYEz80C0Rco0hFNY0/XoAhXwRZi86HANozcOuTii3sOpHgdzo0nGEiAntjSEUmop2kqGrCgVSDTFRg5Ce4Dud1YBudIvD/3YLhGJeNZVQGDjqBBRNvAYIYUukJsBeh5xwa47+1IYSIboV58duQpgWCM0EFAYdfo1+UNnEi3AxSk5Y4eG4ioXrULSLgofZRhCWJAt1NELaRBimkZScULb7VJD19sTC9aWlzZOjo6OTTfe7GHMMNkVMWGwEYV682V5fjEomBnCYJqWphTcmI/TLZmPXsHvfS6vCwcOT9SWcUX/E84lcIwhJnqnBQsFEPzARZFOy0MINDAx03KIzxKrMQtRVrP/F5/Olcmk4uu7O5gDT8eYSvN3oLCDkpaVFzkTAkoKFbLXkhGEyVQQt0csk7VMc9zyejMe/XDqi5gxBVmYh6CqWNpkkIJzhvB1QXo5zFXkm2QPj9Dkm5MwnJCeatpDtcVyUyzEmRxRyDUinHaAMPsnPjRcOXxytg6DbPDrGmHnZrALkmaUjJpkDhJmYtE/AccWk63xPTzf2MNUAQtxjyS0cG61UQDlM4eAUoBwsboCZYjTaWQZGldeXQP648IKeVKA8s/SCyXEueCfNAL0XwoHA7Ia9BSQUF95MJMTZQNYKdRCGhRnGe/1McI6OYuH3GtepITeyEACmuY4INDFLI5JtrYYR4jPtlyVShSi9VtEQyToAOPYCU/ogiiQuEpfdbnBO6E8AC9dPmBkOjvMA4Ta6OiImcHa4REJ+ChPazSPEXVZYnkhPzTRCmMJjNzKlra1CYTWfP1gGOsgXDkGtL9CfgHlmlNnl0H7VDjSxmNvOFXc7BEiXQMiYT7gqPLeEGs7o8FAitAVGUpXyPpY5CJ9W/26pyOEduSxsiXwyy/O8L+ciSUckJH1rt3mEy8KjZ2gLT2+HYkMEhP0RmQYH/29U7jkovnySwoADHbAh+phkGn477yvGhI08TIj3SVwz5hGOE0JZkNZIKNPFny4o9J5LJbyhPOAC9iEP0/j7+W3HAI5TTEiWNEwk3CDPnqHH3Hqi1C8S2q6NUQrYqtosODRwkkMWDnh34uj22SRPCJncNm6LwERISIbeu+YRos4iEK5Y5j0904jJtOLoyuPwkYfHrg5EuM1ncuju0p00frREMc7nYqTPSAFLs6BvBL3jjHnrNDby4JLqmp0iiVBbfvR8gjjOo2CMxmRy/E6umMlmMnEeAII+cBe5aL+aBaO2qzNIV3OmEeIzrzw1PVU6TkQYPwoljVqhF92in8lkslnQZ+zkMhCQSW7HcEssNoCQj7+H1FOrRjvLQAoxWcWHn/XCdaCOAgVmKruTyaKMmsvCYNzJIRO9duQhkVmExalug/qx5733fhgN+DWEtqwSTriunURBGtlGZzWz49vOol7Rt42WBJJoKN5hB7igkzw+PDzkebPWabIuV4dx9fdPODUVTjjxw3pwM8RBGkcj03QKplRfBmWUHRSmqLdgtvJzczbznuGdcVVe9lSTYmedyKizylrMC49AQYQDIwgntw3I4ukM6jVyaBfAh0rDe4b56NBmyrxMmuTqIYzo7rVQbziwuxMHKkJCJp3mYa+Ry4B3nu6gWuCd7eXo0crRoYmI9k8GiSKk2uh1jBqGxWLoLdwxxwYl6f9dYkLokwhz6RQm3IkXe7YpwuMPDk9WDkdP6nkmnBosHnVIbUUQSQcjENHgdZ9VUcozKRKlh8mV5E6HFKXM8gfJk5OVleN6HuynLJ7Kd8kMRZjbgW/58Hmug9DRgc5eCp29JBqe+jLfv7t04ZjONAzPzh2tHK4vLQVM/82AKdRnFdH3oBMtWIjewd2ywSsI5L0FXTYYT61vkt6CHHz4QfJoyV0O1P97YJVC4w4SSnxWiNPtdAq/IatFrZL1+GkBMZf5YS7KRv+GGoBXyFsr+TkW3v0dnTO7LZKxIzrR8UwmByfjYGSVQYu8PtRUvFmDZWe9UpgWqbKfHr+IjpPwEBvAygR8tP3h4bLZG8H8FEo1I6AaOdBbAUgwOs4lmXhRsNBoMxTPHjQRjEWTuOw4z2cyKy/+hkfeVAPgN6LR5MrKisnbpMLwGLTEON5fSabxHU3xIo9Ps+EgZRg8e4pt82iwzfCpNAJayWR4vHzqTVNHr7w4XOHNByT5wBHLbZM30uS0xne8+DQbHw9TM2D8XeIcn8yA5VeyAf9MG5rSypK1lBwpnBDyBNBbzwoYWcXw7uCyRcIcATTawmsTTwZxsSx+Sgci5H05h9JprlHCSpQjg8oWVqJw+3Z4uUY4pqA4yuoA0VsEfTKfTcIVvxGy4sdV35lWi8hqoiM2kvPxfLII/viKXrLU1qh7ZKqVIdVwxBwj2WIuV9z1Cqu2XPr0j2sqTcoeiHl3QdGZ4q5D2KLhqi7DaZyKxEVYEXrl3cHVv/y1K5y+irI76oyOGpVTnFB1mJIJsuLpo+WtI0UbUspeXQ/OpHYS57jKojs4e/N/qDrjkjF2cFzWrEzHZ7mKsl1NbIJUPXLdHIe3or0cZy+aOT5MFu2kbC8ouzvXpF5CoSLx4m633T6TPfWWeyNlw7u2u2eKDSjbkiVLlixZsmTJkiVLlixZsmTJkiVLlixZsvSS6v8BHRQxHFRINsQAAAAASUVORK5CYII=) center 85% no-repeat;
    width: 40%;
    height: 100%;
    max-width:100%;
    padding:20px 35px 10px 35px;
    
    & > p, & > h5 {
        color: #000000;
        
        font-weight: 600
    }
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to Fresh Products Delivered Home Super Quick'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen, setAccount }) => {
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ? 
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                            { error && <Error>Please enter valid Email ID/Mobile number</Error> }
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            <Text>By continuing, you agree to A2C's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{textAlign:'center'}}>OR</Text>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to A2C? Create an account</CreateAccount>
                        </Wrapper> : 
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                            <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;