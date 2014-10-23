using Mere.Attributes;

namespace Ambro.Generated._54Dot165Dot157Dot218.Ambro
{
	[MereTable(@"Packages", @"Ambro", @"54.165.157.218", @"sa", @"Lala!!4130", 0)]
	public partial class Package
	{
		[MereIdentity]
		[MereKey]
		[MereColumn(@"PackageId")]
		[MereDisplayName("PackageId")]
		public virtual int PackageId { get; set; }

		[MereColumn(@"ProductId")]
		[MereDisplayName("ProductId")]
		public virtual int ProductId { get; set; }

		[MereColumn(@"CategoryId")]
        [MereDisplayName("CategoryId")]
        public virtual int CategoryId { get; set; }

		[MereColumn(@"PackageName")]
		[MereDisplayName("PackageName")]
		public virtual string PackageName { get; set; }

		[MereNullable]
		[MereColumn(@"ImgUrl")]
		[MereDisplayName("ImgUrl")]
		public virtual string ImgUrl { get; set; }

		[MereColumn(@"Price")]
		[MereDisplayName("Price")]
		public virtual decimal Price { get; set; }

		[MereNullable]
		[MereColumn(@"CostPrice")]
		[MereDisplayName("CostPrice")]
		public virtual decimal? CostPrice { get; set; }

		[MereNullable]
		[MereColumn(@"PackQuantity")]
		[MereDisplayName("PackQuantity")]
		public virtual int? PackQuantity { get; set; }

		[MereNullable]
		[MereColumn(@"NetWeightPounds")]
		[MereDisplayName("NetWeightPounds")]
		public virtual string NetWeightPounds { get; set; }

		[MereNullable]
		[MereColumn(@"ContainerSize")]
		[MereDisplayName("ContainerSize")]
		public virtual string ContainerSize { get; set; }

		[MereNullable]
		[MereColumn(@"ContainerDescription")]
		[MereDisplayName("ContainerDescription")]
		public virtual string ContainerDescription { get; set; }

		[MereNullable]
		[MereColumn(@"Size")]
		[MereDisplayName("Size")]
		public virtual string Size { get; set; }

		[MereNullable]
		[MereColumn(@"PieceSize")]
		[MereDisplayName("PieceSize")]
		public virtual string PieceSize { get; set; }

	}
}
