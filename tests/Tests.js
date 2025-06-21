const { remote } = require('webdriverio');

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': 'com.companyname.mauitecmicproject',
    'appium:appActivity': 'crc6449c7add4b57e0fca.MainActivity',
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
};

function byAutomationId(id) {
    return `android=new UiSelector().resourceId("com.companyname.mauitecmicproject:id/${id}")`;
}

async function fillCommonFields(name, email, confirmEmail, password, gender = 'Masculino') {
    const driver = global.driver; // Access global driver
    await (await driver.$(byAutomationId('nameEntry'))).setValue(name);
    await (await driver.$(byAutomationId('emailEntry'))).setValue(email);
    await (await driver.$(byAutomationId('confirmEmailEntry'))).setValue(confirmEmail);
    await (await driver.$(byAutomationId('passwordEntry'))).setValue(password);

    await (await driver.$(byAutomationId('genderPicker'))).click();
    await (await driver.$(`//*[@text="${gender}"]`)).click();
}

async function clickRegister() {
    const driver = global.driver; // Access global driver
    await (await driver.$(byAutomationId('registerButton'))).click();
    await driver.pause(1000);
}

async function getResultMessage() {
    const resultLabel = await driver.$(byAutomationId('resultLabel'));
    const resultText = await resultLabel.getText();

    return resultText;
}

// Test 1: Name contains numbers
async function testNameWithNumbers() {
    await fillCommonFields('John123', 'test@email.com', 'test@email.com', 'a12345678');
    await clickRegister();

    const msg = await getResultMessage();
    if (!msg.toLowerCase().includes('nome') || !msg.toLowerCase().includes('números')) {
        throw new Error(`Test failed: Expected name validation error. Got: "${msg}"`);
    }
}

// Test 2: Invalid email (missing @)
async function testInvalidEmailFormat() {
    await fillCommonFields('John Doe', 'invalidemail.com', 'invalidemail.com', 'a12345678');
    await clickRegister();

    const msg = await getResultMessage();
    if (!msg.toLowerCase().includes('email')) {
        throw new Error(`Test failed: Expected email format validation error. Got: "${msg}"`);
    }
}

// Test 3: Emails do not match
async function testMismatchedEmails() {
    await fillCommonFields('John Doe', 'john@email.com', 'jane@email.com', 'a12345678');
    await clickRegister();

    const msg = await getResultMessage();
    if (!msg.toLowerCase().includes('emails') || !msg.toLowerCase().includes('não coincidem')) {
        throw new Error(`Test failed: Expected mismatched emails error. Got: "${msg}"`);
    }
}

// Test 4: Valid registration
async function testSuccessfulRegistration() {
    await fillCommonFields('John Doe', 'john@email.com', 'john@email.com', 'a12345678');
    await clickRegister();

    const msg = await getResultMessage();
    if (!msg.toLowerCase().includes('registado com sucesso')) {
        throw new Error(`Test failed: Expected success message. Got: "${msg}"`);
    }
}

// Test 5: Empty fields (required fields)
async function testEmptyFields() {
    await fillCommonFields('John Doe', '', '', '');
    await clickRegister();

    const msg = await getResultMessage();
    if (!msg.toLowerCase().includes('por favor, preencha todos os campos.')) {
        throw new Error(`Test failed: Expected empty fields validation error. Got: "${msg}"`);
    }
}

// Test 6: Password strength (minimum length)
async function testPasswordStrength() {
    await fillCommonFields('John Doe', 'john@email.com', 'john@email.com', '1234');
    await clickRegister();

    const msg = await getResultMessage();
    if (!msg.toLowerCase().includes('a senha deve ter pelo menos 8 caracteres e conter letras e números.')) {
        throw new Error(`Test failed: Expected password strength validation error. Got: "${msg}"`);
    }
}

async function runAllTests() {
    

    try {
        global.driver = await remote(wdOpts);
    } catch (error) {
        console.warn("⚠️ AVISO: Não foi possível conectar ao dispositivo Android.");
        console.warn("Este teste está a ser executado num ambiente sem emulador/dispositivo ligado.");
        process.exit(0);
    }

    try {
        await global.driver.pause(2000);

        console.log('Running test: Name with numbers...');
        await testNameWithNumbers();

        console.log('Running test: Invalid email format...');
        await testInvalidEmailFormat();

        console.log('Running test: Mismatched emails...');
        await testMismatchedEmails();

        console.log('Running test: Empty fields...');
        await testEmptyFields();

        console.log('Running test: Password strength...');
        await testPasswordStrength();

        console.log('Running test: Successful registration...');
        await testSuccessfulRegistration();

        console.log('All tests passed!');
    } catch (err) {
        console.error(`Test error: ${err.message}`);
    } finally {
        await global.driver.deleteSession(); // Close the driver at the end
    }
}

runAllTests();
