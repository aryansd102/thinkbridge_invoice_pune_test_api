namespace BuggyApp.Models
{
    public class Invoice
    {
        public int InvoiceID { get; set; }    
        public string CustomerName { get; set; }
        public List<InvoiceItem> Items { get; set; }
    }
}
