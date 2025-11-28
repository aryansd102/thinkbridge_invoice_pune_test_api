namespace BuggyApp.Models
{
    public class InvoiceItem
    {
        public int ItemID { get; set; }        
        public int InvoiceID { get; set; }    
        public string Name { get; set; }
        public decimal Price { get; set; }

        public Invoice? Invoice { get; set; }  
    }
}
