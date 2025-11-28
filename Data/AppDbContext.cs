using Microsoft.EntityFrameworkCore;
using BuggyApp.Models;

namespace BuggyApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<InvoiceItem> InvoiceItems { get; set; }  // IMPORTANT

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Invoice>()
                .HasKey(i => i.InvoiceID);

            modelBuilder.Entity<InvoiceItem>()
                .HasKey(ii => ii.ItemID);   // THIS FIXES YOUR ERROR

            modelBuilder.Entity<Invoice>()
                .HasMany(i => i.Items)
                .WithOne(ii => ii.Invoice)
                .HasForeignKey(ii => ii.InvoiceID);

            base.OnModelCreating(modelBuilder);
        }
    }
}
