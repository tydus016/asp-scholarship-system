using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations.All
{
    /// <inheritdoc />
    public partial class addednew : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "free_tuition_fee",
                table: "applicants",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "special",
                table: "applicants",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "subsidized",
                table: "applicants",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "free_tuition_fee",
                table: "applicants");

            migrationBuilder.DropColumn(
                name: "special",
                table: "applicants");

            migrationBuilder.DropColumn(
                name: "subsidized",
                table: "applicants");
        }
    }
}
