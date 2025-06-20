namespace MauiTecmicProject;

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();
    }

    private void OnRegisterClicked(object sender, EventArgs e)
    {
        string name = nameEntry.Text;
        string email = emailEntry.Text;
        string confirmEmail = confirmEmailEntry.Text;
        string password = passwordEntry.Text;
        DateTime birthDate = birthDatePicker.Date;
        string gender = genderPicker.SelectedItem as string;

        if (string.IsNullOrWhiteSpace(name) ||
            string.IsNullOrWhiteSpace(email) ||
            string.IsNullOrWhiteSpace(confirmEmail) ||
            string.IsNullOrWhiteSpace(password) ||
            gender == null)
        {
            resultLabel.TextColor = Colors.Red;
            resultLabel.Text = "Por favor, preencha todos os campos.";
            return;
        }

        if (name.Any(char.IsDigit))
        {
            resultLabel.TextColor = Colors.Red;
            resultLabel.Text = "O nome não pode conter números.";
            return;
        }

        if (!email.Contains("@"))
        {
            resultLabel.TextColor = Colors.Red;
            resultLabel.Text = "O email deve conter um @.";
            return;
        }

        if (!email.Equals(confirmEmail, StringComparison.OrdinalIgnoreCase))
        {
            resultLabel.TextColor = Colors.Red;
            resultLabel.Text = "Os emails não coincidem.";
            return;
        }

        if (birthDate > DateTime.Now)
        {
            resultLabel.TextColor = Colors.Red;
            resultLabel.Text = "Data de nascimento inválida.";
            return;
        }

        if (password.Length < 8 || !password.Any(char.IsLetter) || !password.Any(char.IsDigit))
        {
            resultLabel.TextColor = Colors.Red;
            resultLabel.Text = "A senha deve ter pelo menos 8 caracteres e conter letras e números.";
            return;
        }

        resultLabel.TextColor = Colors.Green;
        resultLabel.Text = $"Utilizador {name} registado com sucesso!\nSexo: {gender}\nData de nascimento: {birthDate:d}";
        // Aqui poderias guardar os dados, enviar para API, etc.
    }
}
