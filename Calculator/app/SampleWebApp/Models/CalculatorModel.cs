namespace Calculator.Models
{
    public class CalculatorModel
    {
        public int FirstNumber { get; set; }
        public int SecondNumber { get; set; }
        public int Result { get; set; }
        public string? Operation { get; set; }
        public string ErrorMessage { get; set; }
    }
}
