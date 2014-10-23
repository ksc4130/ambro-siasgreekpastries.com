using Mere.Attributes;

namespace Ambro.Generated._54Dot165Dot157Dot218.Ambro
{
	[MereTable(@"Products", @"Ambro", @"54.165.157.218", @"sa", @"Lala!!4130", 0)]
	public partial class Product
	{
		[MereIdentity]
		[MereKey]
		[MereColumn(@"ProductId")]
		[MereDisplayName("ProductId")]
		public virtual int ProductId { get; set; }

		[MereColumn(@"CategoryId")]
		[MereDisplayName("CategoryId")]
		public virtual int CategoryId { get; set; }

		[MereColumn(@"ProductName")]
		[MereDisplayName("ProductName")]
		public virtual string ProductName { get; set; }

		[MereColumn(@"ProductDescription")]
		[MereDisplayName("ProductDescription")]
		public virtual string ProductDescription { get; set; }

		[MereColumn(@"Ingredients")]
		[MereDisplayName("Ingredients")]
		public virtual string Ingredients { get; set; }

	}
}
