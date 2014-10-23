using Mere.Attributes;

namespace Ambro.Generated._54Dot165Dot157Dot218.Ambro
{
	[MereTable(@"Categories", @"Ambro", @"54.165.157.218", @"sa", @"Lala!!4130", 0)]
	public partial class Category
	{
		[MereIdentity]
		[MereKey]
		[MereColumn(@"CategoryId")]
		[MereDisplayName("CategoryId")]
		public virtual int CategoryId { get; set; }

		[MereColumn(@"CategoryName")]
		[MereDisplayName("CategoryName")]
		public virtual string CategoryName { get; set; }

		[MereColumn(@"CategoryDescription")]
        [MereDisplayName("CategoryDescription")]
		public virtual string ContainerDescription { get; set; }

	}
}
